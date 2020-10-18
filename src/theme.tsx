import red from '@material-ui/core/colors/red';
import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#FF8B00'
    },
    secondary: {
      main: '#FFF3E0'
    },
    error: {
      main: red.A400
    },
    background: {
      default: '#F5F5F5'
    }
  }
});

export default theme;
