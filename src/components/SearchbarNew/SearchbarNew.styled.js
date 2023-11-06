import styled from 'styled-components';

export const SearchContainer = styled.div`
  position: relative;
  width: ${properties => (properties.isSearching ? 300 : 40)}px;
  height: 40px;
  background-color: transparent;
  border: 2px solid rgba(var(--bg-primary), 1);
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* padding-left: 5px; */
  transition: all 0.25s ease;

  order: 3;
  display: flex;
  justify-content: flex-end;
`;

export const SearchInput = styled.input`
  padding-left: 36px;
  border: none;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: transparent;
  outline: none;
  font-size: 16px;
  border: 1px solid transparent;

  &:focus {
    border-color: rgba(0, 0, 0, 0.3);
  }
`;

export const IconButton = styled.button`
  position: relative;
  height: 36px;
  width: 36px;
  border: none;
  z-index: 1;
  cursor: pointer;
  background-color: rgba(var(--bg-primary), 1);

  &:hover {
    background-color: rgba(var(--bg-primary), 0.7);

    &::after {
      opacity: 1;
      transform: scale(1);
    }
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    border-radius: 4px;
    z-index: -1;
    background-color: #000;
    transition: all 0.25s ease;
    transform: scale(0.6);
    opacity: 0;
  }

  svg {
    fill: rgba(var(--text), 1);
    transition: var(--trans);
  }
`;
