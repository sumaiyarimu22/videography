import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./utils/Themes";

const Container = styled.div`
  background: ${({ theme }) => theme.bg};
  width: 100%;
  height: 100vh;
`;

const App = () => {
  const [darkMood, setDarkMood] = useState(false);
  return (
    <ThemeProvider theme={darkMood ? darkTheme : lightTheme}>
      <Container>App</Container>
    </ThemeProvider>
  );
};

export default App;
