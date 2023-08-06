import PropTypes from 'prop-types';

import Btn from './Button.styled';

function Button({ onLoadMore }) {
  return <Btn onClick={onLoadMore}>Load more</Btn>;
}

Button.propTypes = {
  onLoadMore: PropTypes.func.isRequired
};

export default Button;
