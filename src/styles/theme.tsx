import { createTheme } from '@material-ui/core'
export const theme = createTheme({
  palette: {
    mode: 'dark',
  },
  typography: {
    fontFamily: "Poppins",
    fontWeightRegular: 400,
    h2: {
      "@media (max-width: 1080px)": {
        fontSize: '3.2rem',
      }
    }
  },
})
