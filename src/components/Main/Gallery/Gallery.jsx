import PropTypes from 'prop-types';

import Container from './Gallery.styled';
import GalleryItem from './GalleryItem/GalleryItem';

function Gallery({ results, onClick }) {
  const selectItem = id => {
    const selected = results.find(post => post.id === id);
    if (selected) {
      onClick(selected);
    }
  };

  return (
    results && (
      <Container>
        {results.map(post => (
          <GalleryItem
            key={post.id}
            id={post.id}
            src={post.poster_path}
            alt={post.title}
            onClick={selectItem}
          />
        ))}
      </Container>
    )
  );
}

Gallery.propTypes = {
  onClick: PropTypes.func.isRequired,
  results: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      poster_path: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
};

export default Gallery;
