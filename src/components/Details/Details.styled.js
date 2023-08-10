import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Card = styled.div`
  display: grid;
  grid-template: auto auto 1fr auto auto / auto 1fr auto;
  gap: 25px;
  height: 100%;
  font-size: 16px;
`;

export const Image = styled.img`
  width: 273px;
  height: 410px;
  grid-row: 1 / 4;
  grid-column: 1 / 2;
  border-radius: 2px;
  box-shadow:
    0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14),
    0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  object-fit: cover;
`;

export const Title = styled.h1`
  color: #3b5998;
  font-size: 20px;
  font-weight: bold;
  grid-row: 1 / 2;
  grid-column: 2 / 4;
`;

export const Genres = styled.p`
  color: #3b5998;
  grid-row: 2 / 3;
  grid-column: 2 / 3;
`;

export const Rating = styled.p`
  display: flex;
  color: #3b5998;
  grid-row: 2 / 3;
  grid-column: 3 / 4;
`;

export const Overview = styled.p`
  color: #3b5998;
  text-align: justify;
  line-height: 1.2;
  grid-row: 3 / 4;
  grid-column: 2 / 4;
`;

export const BtnAdditional = styled.ul`
  color: #3b5998;
  grid-row: 4 / 5;
  grid-column: 1 / 2;
  display: flex;
  gap: 25px;
  justify-content: space-between;

  li {
    width: 100%;
  }
`;

export const Link = styled(NavLink)`
  text-align: center;
  background-color: #dfe3ee;
  color: #3b5998;
  border-radius: 5px;
  padding: 5px 10px;
  display: block;

  &:hover {
    background-color: #3b5998;
    color: #dfe3ee;
  }

  &.active {
    background-color: #3b5998;
    color: #dfe3ee;
  }
`;