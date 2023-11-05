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
import MenuButton from '../MenuButton/MenuButton';
import Searchbar from '../Searchbar/Searchbar';
import ToggleTheme from '../ToggleTheme/ToggleTheme';

function Header() {
  return (
    <HeaderBox>
      <ContainerHeader>
        <Logo>
          <Link to="/">
            <RiMovie2Line />
            <p>Movie</p>
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
        <ToggleTheme />
        <LoginButton type="button">
          <IoLogInOutline />
        </LoginButton>
        <MenuButton />
      </ContainerHeader>
    </HeaderBox>
  );
}

export default Header;
