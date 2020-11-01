import React from 'react';
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import MainSection from './components/MainSection'

const theme = createMuiTheme({
  palette: {
      primary: {
          light: "#CBB67C",
          main: "#586D3D",
          dark: "#33FF8A",
  },
      secondary: {
          light: "#c4e34a",
          main: "#CBB67C",
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
