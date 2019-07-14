import { SheetsRegistry } from 'react-jss';
import { createMuiTheme, createGenerateClassName } from '@material-ui/core/styles';

const SopraSteriaTheme = createMuiTheme({
  palette: {
    primary: { main: '#cf022b' },
    secondary: { main: '#ddd' }
  },

  typography: {
    useNextVariants: true
  },

  appBar: {
    color: 'white'
  },

  card: {
    fontWeight: 600
  },

  flatButton: {
    fontWeight: 600
  },

  /* spell-checker: disable */
  subheader: {
    /* spell-checker: enable */
    fontWeight: 600
  }
});

function createPageContext() {
  return {
    SopraSteriaTheme,
    sheetsManager: new Map(),
    sheetsRegistry: new SheetsRegistry(),
    generateClassName: createGenerateClassName()
  };
}

export default function getContext() {
  if (!process.browser) {
    return createPageContext();
  }

  if (!global.INIT_MATERIAL_UI) {
    global.INIT_MATERIAL_UI = createPageContext();
  }

  return global.INIT_MATERIAL_UI;
}
