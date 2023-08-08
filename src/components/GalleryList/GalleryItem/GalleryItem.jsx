import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';

import Container from './GalleryItem.styled';

function GalleryItem({ post }) {
  const { id, poster_path: posterPath, title } = post;
  const location = useLocation();

  const POSTER_URL = `https://image.tmdb.org/t/p/w500`;
  const url = `${POSTER_URL}${posterPath}`;
  return (
    <Container>
      <Link to={`/movies/${id}`} state={{ from: location }}>
        <img src={url} alt={title} role="presentation" />
      </Link>
    </Container>
  );
}

GalleryItem.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    poster_path: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
  }).isRequired
};

export default GalleryItem;
