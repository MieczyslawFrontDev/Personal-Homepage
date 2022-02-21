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
  max-width: 1216px;
  margin: 115px auto;
  background: ${({ theme }) => theme.colors.whiteLilac};
  color: ${({ theme }) => theme.colors.mineShaft};
  letter-spacing: 0.05em;
  }
`;
