import React from 'react';
import PropTypes from 'prop-types';
import s from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ img, getElem }) => {
  const { webformatURL, tags, largeImageURL } = img;
  return (
    <li className={s.ImageGalleryItem}>
      <img
        src={webformatURL}
        alt={tags}
        className={s.ImageGalleryItem_image}
        onClick={() => {
          getElem(largeImageURL, tags);
        }}
      />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  img: PropTypes.shape({
    webformatURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
  }),
  getElem: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
