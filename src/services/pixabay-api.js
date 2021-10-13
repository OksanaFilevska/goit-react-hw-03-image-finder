const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '22870491-0414a720e7578a2aeb94b7ded';

export default class PixabayApiService {
  fetchApi() {
    const url = `${BASE_URL}?q=${this.searchQuery}&page=${this.page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`;
    return fetch(url)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        // return Promise.reject(new Error(`Нет изображения с именем ${this.searchQuery}`));
      })
      .then(result => {
        return result;
      });
  }

  incrementPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}