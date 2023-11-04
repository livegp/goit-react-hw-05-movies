import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
import { reset } from 'styled-reset';

const GlobalStyle = createGlobalStyle`

${normalize}

${reset}

[data-theme='light'] {
  --accent: 58,87,149;
  --bg-primary: 237,240,245;
  --bg-secondary: 99,123,173;
  --text: 173,185,211;
  --text-primary: 237,240,245;
  --text-secondary: 58,87,149;
}

[data-theme='dark'] {
  --accent: 58,87,149;
  --bg-primary: 51,51,51;
  --bg-secondary: 51,51,51;
  --text: 173,185,211;
  --text-primary: 237,240,245;
  --text-secondary: 58,87,149;
}

*,
::after,
::before {
    box-sizing: border-box;
}

html {
  height: 100%;
  scroll-behavior: smooth;
}

body {
  height: 100%;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;
  overflow-y: scroll;
  color: var(--text-primary);
  background-color: rgba(var(--bg-primary), 1);;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}
body::-webkit-scrollbar-track {
  background: rgba(0, 0, 0, 0.1);
}
body::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, 0.2);
}
body::-webkit-scrollbar-thumb:hover {
  background: rgba(0, 0, 0, 0.4);
}
body::-webkit-scrollbar-thumb:active {
  background: rgba(0, 0, 0, 0.9);
}

a, a:visited, a:hover {
    text-decoration: none;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
}

#root {
  height: 100%;
}
`;

export default GlobalStyle;
