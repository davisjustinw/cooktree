import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
  palette: {
    primary: {
      light: 'hsl(204,70%,71%)',
      main: 'hsl(204,30%,51%)',
      dark: 'hsl(204,70%,31%)'
    },
    secondary: {
      light: 'hsl(23,60%,61%)',
      main: 'hsl(23, 42%, 39%)',
      dark: 'hsl(23,60%,21%)'
    },
    error: {
      light: 'hsl(0,70%,61%)',
      main: 'hsl(0, 50%, 41%)',
      dark: 'hsl(0,70%,21%)'
    },
    warning: {
      light: 'hsl(50,70%,61%)',
      main: 'hsl(50, 50%, 41%)',
      dark: 'hsl(50,70%,21%)'
    },
    success: {
      light: 'hsl(80,80%,55%)',
      main: 'hsl(80, 60%, 35%)',
      dark: 'hsl(80,80%,15%)'
    }
  }
})

export default theme
