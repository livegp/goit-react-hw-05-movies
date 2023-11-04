import { FaMoon, FaSun } from 'react-icons/fa6';
import styled, { keyframes } from 'styled-components';

export const LabelToggleTheme = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  order: 2;
  cursor: pointer;
  user-select: none;

  svg {
    font-size: 30px;
    fill: rgba(var(--bg-primary), 1);
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  :hover svg {
    fill: rgba(var(--bg-primary), 0.7);
  }

  input {
    cursor: pointer;
    opacity: 0;
  }
`;

const rotateslide = keyframes`   
  0% {
    transform: rotate(-360deg) scale(0);
    opacity: 0;
  }

  75% {
    transform: rotate(25deg);
  }
`;

export const MoonToggleTheme = styled(FaMoon)`
  animation: ${rotateslide} 0.5s;
`;

export const SunToggleTheme = styled(FaSun)`
  animation: ${rotateslide} 0.5s;
`;
