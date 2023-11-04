import styled from 'styled-components';

const FooterBox = styled.footer`
  color: rgba(var(--text-primary), 1);
  background-color: rgba(var(--accent), 1);

  a {
    color: #dfe3ee;

    &:hover {
      color: #f7f7f7;
    }
  }
`;

export default FooterBox;
