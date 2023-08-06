import PropTypes from 'prop-types';
import { Routes, Route } from 'react-router-dom';

import MainBox from './Main.styled';
import Home from '../../page/Home/Home';
import Movies from '../../page/Movies/Movies';
import { Container } from '../App/App.styled';

function Main({ results, loading, selected, total, onLoadMore, onClick }) {
  return (
    <MainBox>
      <Container>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                results={results}
                loading={loading}
                total={total}
                onLoadMore={onLoadMore}
                onClick={onClick}
              />
            }
          />
          <Route
            path={`/movies/${selected}`}
            element={<Movies selected={selected} />}
          />
        </Routes>
      </Container>
    </MainBox>
  );
}

Main.propTypes = {
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

export default Main;
