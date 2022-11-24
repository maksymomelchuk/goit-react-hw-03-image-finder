import { Circles } from 'react-loader-spinner';

const Loader = () => {
  return (
    <div className="Modal__backdrop">
      <div className="loader">
        <Circles color="red" />
      </div>
    </div>
  );
};

export { Loader };
