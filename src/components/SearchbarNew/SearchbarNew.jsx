import { useState } from 'react';
import { AiOutlineSearch, AiOutlineClose } from 'react-icons/ai';

import {
  IconButton,
  SearchContainer,
  SearchInput,
} from './SearchbarNew.styled';

function SearchbarNew() {
  const [isActive, setIsActive] = useState(false);
  const toggleSearch = () => setIsActive(!isActive);
  return (
    <SearchContainer isSearching={isActive}>
      <SearchInput />
      <IconButton onClick={toggleSearch}>
        {isActive ? (
          <AiOutlineClose size={25} />
        ) : (
          <AiOutlineSearch size={25} />
        )}
      </IconButton>
    </SearchContainer>
  );
}

export default SearchbarNew;
