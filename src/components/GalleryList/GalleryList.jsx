import PropTypes from 'prop-types';

import GalleryItem from './GalleryItem/GalleryItem';
import { Container, Title } from './GalleryList.styled';

function GalleryList({ results, title }) {
  return (
    results && (
      <>
        <Title>{title}</Title>
        <Container>
          {results.map(post => (
            <GalleryItem key={post.id} post={post} />
          ))}
        </Container>
      </>
    )
  );
}

GalleryList.propTypes = {
  results: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      poster_path: PropTypes.string,
      title: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
};

export default GalleryList;
