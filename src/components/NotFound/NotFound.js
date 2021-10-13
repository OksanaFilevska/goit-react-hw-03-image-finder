import PropTypes from 'prop-types';
import s from './NotFound.module.css';

function NotFound ({ message }) {
  return <p className={s.message}> Search images {message} not found</p>;
}

NotFound.protoType = {
  message: PropTypes.string,
};

export default NotFound;