import { Suspense } from 'react';
import { IoLogInOutline } from 'react-icons/io5';
import { RiMovie2Line } from 'react-icons/ri';
import { Outlet } from 'react-router-dom';

import {
  Header,
  Link,
  Footer,
  Logo,
  Nav,
  LoginBtn,
  ContainerHeader,
  Wrappen,
  Container,
  Main
} from './SharedLayout.styled';
import Loader from '../Loader/Loader';
import Searchbar from '../Searchbar/Searchbar';

function SharedLayout({ onSubmit }) {
  return (
    <Wrappen>
      <Header>
        <ContainerHeader>
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
          <Searchbar onSubmit={onSubmit} />
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
