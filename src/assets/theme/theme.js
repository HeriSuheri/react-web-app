import { createTheme } from "@mui/material/styles";
import * as Colors from "./colors";

const themeBN = createTheme({
  typography: {
    fontFamily: "FuturaBkBT",
    fontWeight: "normal",
  },
  palette: {
    text: { primary: Colors.Dark },
    primary: {
      light: Colors.PrimarySoft,
      main: Colors.PrimaryMedium,
      dark: Colors.PrimaryDark,
      contrastText: Colors.White,
    },
    secondary: {
      main: Colors.Dark,
    },
    success: { main: Colors.SecondaryMedium },
    error: { main: Colors.RedMedium },
    background: {
      default: Colors.GrayUltrasoft,
    },
  },
  status: {
    active: Colors.SecondaryMedium,
    hold: Colors.RedMedium,
  },
});

const theme = themeBN;

export default theme;
