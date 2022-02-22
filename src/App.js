import React from "react";
import { GlobalStyle } from "./GlobalStyle";
import { ThemeProvider } from "styled-components";
import { selectIsDarkTheme } from "./App/common/ThemeSwitch/themeSlice";
import { useSelector } from "react-redux";
import { darkTheme, lightTheme } from "./theme";
import { PersonalHomepage } from "./App/features/Homepage";

function App() {
  const isDarkTheme = useSelector(selectIsDarkTheme);

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <GlobalStyle />
      <PersonalHomepage />
    </ThemeProvider>
  );
}

export default App;
