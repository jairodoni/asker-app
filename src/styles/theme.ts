import { createTheme } from '@material-ui/core';
export const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#47D802',
    },
    secondary: {
      main: '#CC0000',
    },
    text: {
      primary: '#f1f1f1',
      secondary: '#333333',
    },
  },
  typography: {
    fontFamily: 'Poppins',
    fontWeightRegular: 400,
    h2: {
      '@media (max-width: 1080px)': {
        fontSize: '3.2rem',
      },
    },
  },
});
