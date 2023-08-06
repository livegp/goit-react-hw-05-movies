import { IoLogInOutline } from 'react-icons/io5';
import { RiMovie2Line } from 'react-icons/ri';

import {
  Container,
  HeaderBox,
  LoginBtn,
  Logo,
  Nav,
  Link
} from './Header.styled';
import Searchbar from './Searchbar/Searchbar';

function Header({ onSubmit }) {
  return (
    <HeaderBox>
      <Container>
        <Logo>
          <a href="/">
            <RiMovie2Line />
          </a>
        </Logo>
        <Nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/movies">Movies</Link>
            </li>
          </ul>
        </Nav>
        <Searchbar endpoint="searchMovies" onSubmit={onSubmit} />
        <LoginBtn type="button">
          <IoLogInOutline />
        </LoginBtn>
      </Container>
    </HeaderBox>
  );
}

export default Header;
