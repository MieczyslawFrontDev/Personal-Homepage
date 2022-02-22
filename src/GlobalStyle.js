import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

html {
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
  };
  
  *,
  ::after,
  ::before {
    box-sizing: inherit;
  };
  
body {
  background: ${({ theme }) => theme.colors.background};
  transition: 0.5s;
  letter-spacing: 0.05em;
  }
`;
