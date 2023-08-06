import PropTypes from 'prop-types';

import Container from './GalleryItem.styled';

function GalleryItem({ id, src, alt, onClick }) {
  const POSTER_URL = `https://image.tmdb.org/t/p/w500`;
  const url = `${POSTER_URL}${src}`;
  return (
    <Container>
      <img
        src={url}
        alt={alt}
        onClick={() => onClick(id)}
        role="presentation"
      />
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
