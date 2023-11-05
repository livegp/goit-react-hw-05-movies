import { RiMovie2Line } from 'react-icons/ri';
import { Link } from 'react-router-dom';

import LogoBox from './Logo.styled';

function Logo() {
  return (
    <LogoBox>
      <Link to="/">
        <RiMovie2Line />
        <p>Movies</p>
      </Link>
    </LogoBox>
  );
}

export default Logo;
