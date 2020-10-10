import React from 'react';
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import MainSection from './components/MainSection'

const theme = createMuiTheme({
  palette: {
      primary: {
          light: "#33FF8A",
          main: "#5A7F10",
          dark: "#33FF8A",
  },
      secondary: {
          light: "#c4e34a",
          main: "#68a845",
          dark: "#23763e",
  }
  },
      typography: {
          fontFamily: ['Mulish',"Montserrat", 'Roboto'].join(',')
  },
});

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <MainSection />
    </MuiThemeProvider>
  );
}

export default App;
