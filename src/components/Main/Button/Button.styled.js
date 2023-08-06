import styled from 'styled-components';

const Btn = styled.button`
  display: flex;
  margin: 25px auto 0;
  padding: 8px 16px;
  border-radius: 2px;
  background-color: #3b5998;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  text-align: center;
  color: #f7f7f7;
  border: 0;
  text-decoration: none;
  cursor: pointer;
  font-family: inherit;
  font-size: 18px;
  line-height: 24px;
  font-style: normal;
  font-weight: 500;
  max-width: 180px;
  box-shadow:
    0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14),
    0px 1px 5px 0px rgba(0, 0, 0, 0.12);

  &:hover,
  &:focus {
    background-color: #f7f7f7;
    color: #3b5998;
  }
`;

export default Btn;