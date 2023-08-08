import React from 'react';
import { IoChevronBack } from 'react-icons/io5';

import { LinkContainer, StyledLink } from './BackLink.styled';

function BackLink({ to, children }) {
  return (
    <StyledLink to={to}>
      <LinkContainer>
        <IoChevronBack size="24" />
        {children}
        <p>Back</p>
      </LinkContainer>
    </StyledLink>
  );
}

export default BackLink;
