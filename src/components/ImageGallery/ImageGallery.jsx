import React, { Component } from 'react';
import PropTypes from 'prop-types';
import s from './ImageGallery.module.css';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import Modal from '../Modal/Modal';

class ImageGallery extends Component {
  state = {
    showModal: false,
    largeSrc: '',
    largeAlt: '',
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
      largeSrc: '',
      largeAlt: '',
    }));
  };

  getElem(largeSrc, largeAlt) {
    console.log(`OOOOO`);
    this.toggleModal();

    this.setState({
      largeSrc,
      largeAlt,
    });
  }

  render() {
    const { gallery } = this.props;
    const { showModal, largeSrc, largeAlt } = this.state;
    const { toggleModal, getElem } = this;

    return (
      <>
        <ul className={s.ImageGallery}>
          {gallery.map(gallery => {
            return (
              <ImageGalleryItem
                key={gallery.id}
                img={gallery}
                getElem={getElem}
              />
            );
          })}
        </ul>

        {showModal && (
          <Modal onClose={toggleModal}>
            {<img src={largeSrc} alt={largeAlt} />}
          </Modal>
        )}
      </>
    );
  }
}

ImageGallery.propTypes = {
  gallery: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ),
  // toggleModal: PropTypes.func.isRequired,
};

export default ImageGallery;
