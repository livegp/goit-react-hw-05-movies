import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Container from './GalleryItem.styled';

function GalleryItem({ id, src, alt, onClick }) {
  const POSTER_URL = `https://image.tmdb.org/t/p/w500`;
  const url = `${POSTER_URL}${src}`;
  return (
    <Container>
      <Link to={`/movies/${id}`}>
        <img
          src={url}
          alt={alt}
          onClick={() => onClick(id)}
          role="presentation"
        />
      </Link>
    </Container>
  );
}

GalleryItem.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired
};

export default GalleryItem;
