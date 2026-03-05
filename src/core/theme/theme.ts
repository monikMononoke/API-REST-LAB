import { createTheme, Theme } from '@mui/material/styles';

export const theme: Theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          color: 'white',
          fontFamily: "'Roboto', sans-serif",
        },
        'a:visited': {
          color: 'white',
          textDecoration: 'none',
        },
      },
    },
  },
});
