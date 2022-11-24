import axios from 'axios';
import PropTypes from 'prop-types';

const Api = async (value, page) => {
  return axios
    .get(
      `https://pixabay.com/api/?key=30739905-a485bdf08a4bd9d2aabc1774e&q=${value}&safesearch=true&orientation=horizontal&per_page=20&page=${page}`
    )
    .then(response => response.data);
};

export { Api };

Api.propTypes = {
  value: PropTypes.string.isRequired,
  page: PropTypes.number.isRequired,
};
