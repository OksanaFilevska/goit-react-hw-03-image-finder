import { Component } from 'react';
import s from './ImageGallery.module.css';
import ImageGalleryItem from '../ImageGalleryItem';
import Loader from '../Loader';
import SerchErrorView from '../NotFound';
import Button from '../Button';

import PixabayApiService from '../../services/pixabay-api.js';

const pixabayApiService = new PixabayApiService();

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

export default class ImageGallery extends Component {
  state = {
    images: [],
    error: null,
    status: Status.IDLE,
    page: 1,
  };

  componentDidUpdate(prevProps, prevState) {
    const prevName = prevProps.searchQuery;
    const nextName = this.props.searchQuery;
    const { page } = this.state;
    if (prevName !== nextName) {
      this.setState({ status: Status.PENDING });
      pixabayApiService.query = nextName;
      pixabayApiService.resetPage();

      pixabayApiService.fetchApi(page).then(result => {
        if (result.hits.length !== 0) {
          return this.setState({ images: result.hits, status: 'resolved' });
        }

        return this.setState({ images: result.hits, status: 'rejected' });
      });
    }
  }

  onLoadMore = () => {
    this.setState({ status: 'pending' });

    pixabayApiService.incrementPage();

    pixabayApiService
      .fetchApi()
      .then(result => {
        return this.setState(prevState => {
          return {
            images: [...prevState.images, ...result.hits],
            status: 'resolved',
          };
        });
      })

      .finally(() => {
        setTimeout(() => {
          window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth',
          });
        }, 200);
      });
  };

  render() {
    const { images, status } = this.state;

    const { searchQuery } = this.props;

    if (status === 'idle') {
      return <div className={s.idle}>Введите имя изображения.</div>;
    }

    if (status === 'pending') {
      return (
        <>
          <ul className={s.ImageGallery} id="imagesList">
            <ImageGalleryItem images={images} />
          </ul>
          <Loader />
        </>
      );
    }

    if (status === 'rejected') {
      return <SerchErrorView message={searchQuery} />;
    }

    if (status === 'resolved') {
      return (
        <>
          <ul className={s.ImageGallery} id="imagesList">
            <ImageGalleryItem images={images} />
          </ul>
          <Button onLoadMore={this.onLoadMore} />
        </>
      );
    }
  }
}