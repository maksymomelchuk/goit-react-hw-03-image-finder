import { createPortal } from 'react-dom';
import { Component } from 'react';
import PropTypes from 'prop-types';

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
  componentDidMount() {
    const { onEsc, onBackdrop } = this.props;
    const modalBackdrop = document.querySelector('.Modal__backdrop');
    document.addEventListener('keydown', onEsc);
    modalBackdrop.addEventListener('click', onBackdrop);
  }

  componentWillUnmount = () => {
    const { onEsc, onBackdrop } = this.props;
    const modalBackdrop = document.querySelector('.Modal__backdrop');
    document.removeEventListener('keydown', onEsc);
    modalBackdrop.removeEventListener('click', onBackdrop);
  };

  render() {
    const { children } = this.props;
    return createPortal(
      <div className="Modal__backdrop">
        <div className="Modal__content">{children}</div>
      </div>,
      modalRoot
    );
  }
}

export { Modal };

Modal.propTypes = {
  onEsc: PropTypes.func.isRequired,
  onBackdrop: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};
