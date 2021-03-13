import { Component } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import s from './Modal.module.css';

const modalRoot = document.getElementById('root-modal');

class Modal extends Component {
  state = {};

  componentDidMount() {
    const { handleEsc } = this;
    window.removeEventListener('keydown', handleEsc);
  }

  componentWillUnmount() {
    const { handleEsc } = this;
    window.removeEventListener('keydown', handleEsc);
  }

  handleEsc(e) {
    const { onClose } = this.props;
    if (e.code === 'Escape') {
      onClose();
    }
  }

  handleCloseModal(e) {
    const { onClose } = this.props;
    if (e.target === e.currentTarget) {
      onClose();
    }
  }

  render() {
    const { handleCloseModal } = this;
    const { children } = this.props;

    return createPortal(
      <div className={s.Overlay} onClick={handleCloseModal}>
        <div className={s.Modal}>{children}</div>
      </div>,
      modalRoot,
    );
  }
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  handleCloseModal: PropTypes.func.isRequired,
};

export default Modal;
