import { createMuiTheme } from '@material-ui/core/styles';
import { ptBR } from '@material-ui/core/locale';

// Create a theme instance.
const theme = createMuiTheme(
  {
    palette: {
      primary: {
        main: '#0741ad',
      },
      secondary: {
        main: '#3590d5',
      },
    },
  },
  ptBR,
);

export default theme;
