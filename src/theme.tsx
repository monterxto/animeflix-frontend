import { createMuiTheme } from '@material-ui/core/styles';
import { PaletteOptions, SimplePaletteColorOptions } from '@material-ui/core/styles/createPalette';

const palette: PaletteOptions = {
  primary: {
    main: '#8be9fd',
    light: '#b2f5fc',
    dark: '#8be9fd',
    contrastText: '#fff',
  },
  secondary: {
    main: '#6272a4',
    light: '#868f96',
    dark: '#6272a4',
    contrastText: '#fff',
  },
  background: {
    default: '#282a36',
    paper: '#1A1C23',
  },
  text: {
    primary: '#fff',
    secondary: '#ffb86c',
  },
  success: {
    main: '#50fa7b',
    light: '#b2f5fc',
    dark: '#8be9fd',
    contrastText: '#000',
  },
  error: {
    main: '#ff5555',
    light: '#ff8a8a',
    dark: '#ff1a1a',
    contrastText: '#000',
  },
  info: {
    main: '#8be9fd',
    light: '#b2f5fc',
    dark: '#8be9fd',
    contrastText: '#000',
  }
};

const theme = createMuiTheme({
  palette,
  overrides: {
    MUIDataTableToolbar: {
      icon: {
        color: (palette.primary as SimplePaletteColorOptions).main,
        "&:focus": {
          color: (palette.primary as SimplePaletteColorOptions).main,
        },
      },
    },
    MUIDataTableBodyRow: {
      hover: {
        "&:hover": {
          backgroundColor: "#6272a414 !important"
        }
      }
    },
    MuiOutlinedInput: {
      notchedOutline: {
        borderColor: '#fff',
      },
      //change hover
      root: {
        "&:hover fieldset": {
          borderColor: (palette.primary as SimplePaletteColorOptions).main + " !important",
        },
      }
    },
    MuiFormControlLabel: {
      label: {
        color: palette?.text?.primary,
      },
    },
  }
});
export default theme;