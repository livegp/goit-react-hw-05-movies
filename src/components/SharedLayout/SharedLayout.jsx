import { Suspense } from 'react';
import { IoLogInOutline } from 'react-icons/io5';
import { RiMovie2Line } from 'react-icons/ri';
import { Outlet, Link } from 'react-router-dom';

import {
  Header,
  Footer,
  Logo,
  Nav,
  LoginBtn,
  ContainerHeader,
  Wrappen,
  Container,
  Main,
  StyleNavLink
} from './SharedLayout.styled';
import Loader from '../Loader/Loader';
import Searchbar from '../Searchbar/Searchbar';

function SharedLayout() {
  return (
    <Wrappen>
      <Header>
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
          <LoginBtn type="button">
            <IoLogInOutline />
          </LoginBtn>
        </ContainerHeader>
      </Header>
      <Main>
        <Container>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </Container>
      </Main>
      <Footer>
        <Container />
      </Footer>
    </Wrappen>
  );
}

export default SharedLayout;
