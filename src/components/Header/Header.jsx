import { IoLogInOutline } from 'react-icons/io5';
import { RiMovie2Line } from 'react-icons/ri';
import { Link } from 'react-router-dom';

import {
  Logo,
  Nav,
  ContainerHeader,
  StyleNavLink,
  LoginButton,
  HeaderBox,
} from './Header.styled';
import Searchbar from '../Searchbar/Searchbar';

function Header() {
  return (
    <HeaderBox>
      <ContainerHeader>
        <Logo>
          <Link to="/">
            <RiMovie2Line />
          </Link>
        </Logo>
        <Nav>
          <ul>
            <li>
              <StyleNavLink to="/">Home</StyleNavLink>
            </li>
            <li>
              <StyleNavLink to="/movies">Movies</StyleNavLink>
            </li>
          </ul>
        </Nav>
        <Searchbar />
        <LoginButton type="button">
          <IoLogInOutline />
        </LoginButton>
      </ContainerHeader>
    </HeaderBox>
  );
}

export default Header;
