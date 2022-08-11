import { common, yellow } from '@mui/material/colors';
import { ThemeOptions } from '@mui/material';

export const JOBS_APP_PRIMARY_COLOR = yellow[800];
export const JOBS_APP_ICON_COLOR = common.white;
export const JOBS_APP_TEXT_COLOR = common.black;

const theme: ThemeOptions = {
  palette: {
    primary: {
      main: JOBS_APP_PRIMARY_COLOR,
      dark: yellow[900],
      light: yellow[500],
      contrastText: JOBS_APP_TEXT_COLOR,
    },
  },
};

export default theme;
