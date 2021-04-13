import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import './App.css';
import Searchbar from './components/Searchbar/Searchbar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Button from './components/Button/Button';
import GalleryLoader from './components/Loader/Loader';
import Modal from './components/Modal/Modal';

const App = () => {
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [urlLargeImage, setUrlLargeImage] = useState('');

  useEffect(() => {
    fetchImages();
  }, [query]);

  useEffect(() => {
    if (page > 2) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    }
  }, [page]);

  const handleQuery = searchQuery => {
    setQuery(searchQuery);
    setImages([]);
    setPage(1);
  };

  const fetchImages = () => {
    if (query === '') {
      return;
    }

    setIsLoading(true);

    axios
      .get(
        `https://pixabay.com/api/?q=${query}&page=${page}&key=19710989-7d132287f37ef0bf3153ac7f1&image_type=photo&orientation=horizontal&per_page=12`,
      )
      .then(response => response.data.hits)
      .then(hits => {
        setImages(prevState => [...prevState, ...hits]);
        setPage(prevState => prevState + 1);
      })
      .finally(() => setIsLoading(false));
  };

  const toggleModal = () => {
    setShowModal(prevState => !prevState);

    if (showModal) {
      setUrlLargeImage('');
    }
  };

  const handleClickImage = event => {
    const url = event.target.dataset.image;

    setUrlLargeImage(url);
    toggleModal();
  };

  return (
    <div>
      <Searchbar onSubmit={handleQuery} />
      <ImageGallery images={images} showLargeImage={handleClickImage} />
      {isLoading && <GalleryLoader />}
      {images.length > 0 && <Button onClick={fetchImages} />}
      {showModal && <Modal image={urlLargeImage} closeModal={toggleModal} />}
    </div>
  );
};

App.defaultProps = {
  query: '',
  images: [],
  page: 1,
  isLoading: false,
  showModal: false,
  urlLargeImage: '',
};

App.propTypes = {
  query: PropTypes.string.isRequired,
  images: PropTypes.array.isRequired,
  page: PropTypes.number.isRequired,
  isLoading: PropTypes.bool.isRequired,
  showModal: PropTypes.bool.isRequired,
  urlLargeImage: PropTypes.string.isRequired,
};

export default App;
