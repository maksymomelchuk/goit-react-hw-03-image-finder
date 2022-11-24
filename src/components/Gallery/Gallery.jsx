import { GalleryItem } from './GalleryItem';
import css from './Gallery.module.css';
import PropTypes from 'prop-types';

const Gallery = ({ data }) => {
  return (
    <ul className={css.ImageGallery}>
      {data.map(el => {
        const { id, largeImageURL, webformatURL } = el;
        return (
          <GalleryItem
            key={id}
            id={id}
            largeImg={largeImageURL}
            smallImg={webformatURL}
          />
        );
      })}
    </ul>
  );
};

export { Gallery };

Gallery.propTypes = {
  data: PropTypes.array.isRequired,
};
