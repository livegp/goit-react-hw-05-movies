import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderBox = styled.header`
  position: sticky;
  top: 0;
  background-color: #3b5998;
  z-index: 10;

  .header .menu-btn:checked ~ .nav {
    position: absolute;
    top: -50%;
    /* left: -50%; */
    transform: translate(-50%, 50vh);
  }

  .header .menu-btn:checked ~ .header__login-btn {
    transform: translateY(0);
  }

  .header .menu-icon {
    cursor: pointer;
    position: relative;
    user-select: none;
    display: none;
    background: #ffecb3;
    border-radius: 5px;
    padding: 16px;
    order: 5;
  }

  .header .menu-icon .nav-icon {
    background: #333;
    display: block;
    height: 2px;
    position: relative;
    transition: background 0.2s ease-out;
    width: 18px;
  }

  .header .menu-icon .nav-icon:before,
  .header .menu-icon .nav-icon:after {
    background: #333;
    content: '';
    display: block;
    height: 100%;
    position: absolute;
    transition: all 0.2s ease-out;
    width: 100%;
  }

  .header .menu-icon .nav-icon:before {
    top: 5px;
  }

  .header .menu-icon .nav-icon:after {
    top: -5px;
  }

  .header .menu-btn {
    display: none;
    order: 6;
  }

  .header .menu-btn:checked ~ .menu-icon .nav-icon {
    background: transparent;
  }

  .header .menu-btn:checked ~ .menu-icon .nav-icon:before {
    transform: rotate(-45deg);
    top: 0;
  }

  .header .menu-btn:checked ~ .menu-icon .nav-icon:after {
    transform: rotate(45deg);
    top: 0;
  }
`;

export const Container = styled.div`
  max-width: 1160px;
  padding: 25px 10px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
  height: 100%;
  padding: 15px;
  gap: 5px;
`;

export const Logo = styled.div`
  order: 1;
  flex-grow: 0;
  margin-right: 30px;

  svg {
    display: block;
    width: 43px;
    height: 43px;
    fill: #dfe3ee;
  }

  &:hover {
    svg {
      fill: #f7f7f7;
    }
  }
`;

export const Nav = styled.nav`
  display: block;
  margin-top: 0;
  position: static;
  order: 2;
  flex-grow: 1;
  top: 250px;
  left: 0;
  transform: translate(0, 0);
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  ul {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: nowrap;
    height: 100%;
    gap: 5px;
  }
`;

export const Link = styled(NavLink)`
  background: transparent;
  border-radius: 5px;
  border: 2px solid transparent;
  padding: 8px;
  order: 0;
  color: #dfe3ee;
  font-size: 20px;
  font-weight: bold;

  &:hover {
    border: 2px solid #dfe3ee;
  }

  &.active {
    background: #dfe3ee;
    color: #3b5998;
  }
`;

export const LoginBtn = styled.button`
  order: 5;
  margin-top: 0;
  background: transparent;
  border-width: 0;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  display: block;
  flex-basis: auto;
  align-items: center;

  svg {
    display: block;
    width: 43px;
    height: 43px;
    stroke: #dfe3ee;
  }

  &:hover {
    svg {
      stroke: #f7f7f7;
    }
  }
`;
