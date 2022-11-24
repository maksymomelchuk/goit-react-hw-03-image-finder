import { Modal } from 'components/Modal/Modal';
import { Component } from 'react';
import css from './GalleryItem.module.css';
import PropTypes from 'prop-types';

class GalleryItem extends Component {
  state = {
    showModal: false,
    link: '',
  };

  onImgClick = event => {
    this.setState({ showModal: true, link: event.target.name });
  };

  onEscPress = event => {
    if (event.key === 'Escape') {
      this.setState({ showModal: false });
    }
  };

  onBackdropClick = event => {
    if (event.target === event.currentTarget) {
      this.setState({ showModal: false });
    }
  };

  render() {
    const { smallImg, largeImg } = this.props;
    return (
      <li className={css.ImageGalleryItem}>
        <img
          className={css.ImageGalleryItemImg}
          src={smallImg}
          alt=""
          name={largeImg}
          onClick={this.onImgClick}
        />
        {this.state.showModal && (
          <Modal onEsc={this.onEscPress} onBackdrop={this.onBackdropClick}>
            <img src={this.state.link} alt="" />
          </Modal>
        )}
      </li>
    );
  }
}

export { GalleryItem };

GalleryItem.propTypes = {
  smallImg: PropTypes.string.isRequired,
  largeImg: PropTypes.string.isRequired,
};
