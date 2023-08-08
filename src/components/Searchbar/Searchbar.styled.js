import { Form, Field } from 'formik';
import styled from 'styled-components';

export const SearchForm = styled(Form)`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 300px;
  background-color: #f7f7f7;
  border-radius: 4px;
  overflow: hidden;
  order: 3;
`;

export const SearchFormButton = styled.button`
  display: inline-block;
  width: 40px;
  height: 40px;
  border: 0;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;

  &:hover {
    opacity: 1;
  }

  svg {
    width: 100%;
    height: 100%;
    fill: #3b5998;
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
  font-size: 20px;
  border: none;
  outline: none;
  padding-left: 4px;
  padding-right: 4px;
  background-color: #f7f7f7;

  &::placeholder {
    color: #3b5998;
    font: inherit;
    font-size: 18px;
  }
`;
