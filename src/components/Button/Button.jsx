import css from './Button.module.css';
import PropTypes from 'prop-types';

const Button = ({ onClick }) => {
  return (
    <button className={css.Button} onClick={onClick} type="button">
      Load More
    </button>
  );
};

export { Button };

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};
