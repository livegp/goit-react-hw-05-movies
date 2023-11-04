import { Form, Field } from 'formik';
import styled from 'styled-components';

export const SearchForm = styled(Form)`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 300px;
  border: 2px solid rgba(var(--bg-primary), 1);
  background-color: transparent;
  border-radius: 4px;
  overflow: hidden;
  order: 3;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    border-color: rgba(var(--bg-primary), 0.7);
  }
  /* @media (width <= 576px) {
    display: none;
  } */
`;

export const SearchFormButton = styled.button`
  background-color: rgba(var(--bg-primary), 1);
  padding: 0;
  color: rgba(var(--text), 1);
  width: 36px;
  height: 36px;
  border: 0;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: rgba(var(--bg-primary), 0.7);
  }

  svg {
    width: 25px;
    height: 25px;
    fill: rgba(var(--text), 1);
  }
`;

export const SearchFormLabel = styled.label`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  clip-path: inset(50%);
  border: 0;
`;

export const SearchFormInput = styled(Field)`
  display: inline-block;
  width: 100%;
  font: inherit;
  color: rgba(var(--text-primary), 0.7);
  font-size: 20px;
  border: none;
  outline: none;
  padding-left: 4px;
  padding-right: 4px;
  background-color: transparent;
  color-scheme: dark;

  &::placeholder {
    background-color: transparent;
    color: rgba(var(--text-primary), 0.7);
    font: inherit;
    font-size: 18px;
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus {
    outline: 3px solid black;
  }
`;
