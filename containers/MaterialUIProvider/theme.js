import { createMuiTheme } from '@material-ui/core/styles';
import { ptBR } from '@material-ui/core/locale';

// Create a theme instance.
const theme = createMuiTheme(
  {
    palette: {
      primary: {
        main: '#f44336',
      },
      secondary: {
        main: '#0d47a1',
      },
    },
  },
  ptBR,
);

export default theme;
