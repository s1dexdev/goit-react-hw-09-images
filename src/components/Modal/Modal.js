import { useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './Modal.module.css';

const Modal = ({ closeModal, image }) => {
  const handleKeydown = event => {
    if (event.code === 'Escape') {
      closeModal();
    }
  };

  const handleClick = event => {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeydown);
  }, []);

  useEffect(() => {
    return () => window.removeEventListener('keydown', handleKeydown);
  }, []);

  return (
    <div className={styles.Overlay} onClick={handleClick}>
      <div className={styles.Modal}>
        <img className={styles.image} src={image} alt="" />
      </div>
    </div>
  );
};

export default Modal;

Modal.propTypes = {
  image: PropTypes.string.isRequired,
  closeModal: PropTypes.func.isRequired,
};
