import PropTypes from 'prop-types';
import s from './NotFound.module.css';

function SerchErrorView({ message }) {
  return <p className={s.message}> Search images {message} not found</p>;
}

SerchErrorView.protoType = {
  message: PropTypes.string,
};

export default NotFound;
