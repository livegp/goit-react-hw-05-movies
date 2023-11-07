import styled from 'styled-components';

const MenuB = styled.label`
  order: 6;
  display: flex;
  align-items: center;
  align-self: center;
  justify-content: center;
  width: 44px;
  height: 40px;
  padding: 0 10px;
  border-radius: 4px;
  cursor: pointer;
  background-color: rgba(var(--bg-primary), 1);
  transition: var(--trans);

  &:hover {
    background-color: rgba(var(--bg-primary), 0.7);
  }

  &:hover input:checked span::before {
    width: 10px;
  }

  input {
    opacity: 0;
    display: none;
    pointer-events: none;

    &:checked ~ span {
      background-color: transparent;
    }

    &:checked ~ span::before {
      top: 0;
      transform: rotate(45deg);
    }

    &:checked ~ span::after {
      top: 0;
      transform: rotate(-45deg);
    }

    &:checked:hover ~ span {
      transform: rotate(-90deg);
    }
  }

  span {
    position: relative;
    display: block;
    width: 20px;
    height: 2px;
    background-color: rgba(var(--accent), 1);
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

    &::after,
    &:before {
      position: absolute;
      left: 0;
      width: 20px;
      height: 100%;
      background-color: rgba(var(--accent), 1);
      transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
      content: '';
    }

    &::after {
      top: 6px;
    }

    &:before {
      top: -6px;
    }
  }
`;

export default MenuB;

// input[type='checkbox'] {
//   position: absolute;
//   opacity: 0;
//   display: none;
//   pointer-events: none;

/* &:checked ~ span {
    background-color: transparent;
  } */

/* &:checked ~ span::before {
    top: 0;
    transform: rotate(45deg);
  } */

/* &:checked ~ span::after {
    top: 0;
    transform: rotate(-45deg);
  } */

/* &:checked ~ span:hover {
    transform: rotate(-90deg);
  } */
// }
