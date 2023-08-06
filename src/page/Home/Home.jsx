import PropTypes from 'prop-types';

import Button from '../../components/Main/Button/Button';
import Gallery from '../../components/Main/Gallery/Gallery';
import Loader from '../../components/Main/Loader/Loader';

function Home({ results, loading, total, onLoadMore, onClick }) {
  return (
    <>
      <Gallery results={results} onClick={onClick} />
      {loading && <Loader />}
      {!loading && results.length < total && <Button onLoadMore={onLoadMore} />}
    </>
  );
}

Home.propTypes = {
  results: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      poster_path: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  loading: PropTypes.bool.isRequired,
  total: PropTypes.number.isRequired,
  onLoadMore: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Home;
