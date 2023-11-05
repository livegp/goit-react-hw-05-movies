import { IoLogInOutline } from 'react-icons/io5';

import { ContainerHeader, LoginButton, HeaderBox } from './Header.styled';
import Logo from '../Logo/Logo';
import MenuButton from '../MenuButton/MenuButton';
import Nav from '../Nav/Nav';
import Searchbar from '../Searchbar/Searchbar';
import ToggleTheme from '../ToggleTheme/ToggleTheme';

function Header() {
  return (
    <HeaderBox>
      <ContainerHeader>
        <Logo />
        <Nav />
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
