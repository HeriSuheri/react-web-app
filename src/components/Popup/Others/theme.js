import { createTheme } from "@mui/material/styles";
import Colors from "../../../utils/helpers/Colors";

const theme = createTheme({
  typography: {
    fontFamily: ["Futura", "sans-serif"].join(","),
    h1: {
      fontFamily: "Futura",
      fontWeight: 900,
      lineHeight: 1.2,
      fontSize: "6.4rem",
      color: Colors.dark.hard,
    },
    h2: {
      fontFamily: "Futura",
      fontWeight: 700,
      lineHeight: 1.4,
      fontSize: "4rem",
      color: Colors.dark.hard,
    },
    h3: {
      fontFamily: "Futura",
      fontWeight: 700,
      lineHeight: 1.6,
      fontSize: "3rem",
      color: Colors.dark.hard,
    },
    h4: {
      fontFamily: "Futura",
      fontWeight: 700,
      lineHeight: "2.344rem",
      fontSize: "2rem",
      color: Colors.dark.hard,
    },
    h5: {
      fontFamily: "Futura",
      fontWeight: 700,
      lineHeight: 1.33,
      fontSize: "1.063rem",
      color: Colors.dark.hard,
    },
    body1: {
      fontFamily: "Futura",
      fontWeight: 400,
      // lineHeight: 1.5,
      // fontSize: "1.5rem",
      color: Colors.dark.hard,
    },
    body2: {
      fontFamily: "Futura",
      fontWeight: 400,
      // lineHeight: 1.33,
      // fontSize: "1.063rem",
      color: Colors.dark.hard,
    },
    subtitle1: {
      fontFamily: "Futura",
      fontWeight: 300,
      // lineHeight: 1.125,
      // fontSize: "0.813rem",
      color: Colors.dark.hard,
    },
    subtitle2: {
      fontFamily: "Futura",
      fontWeight: 300,
      // lineHeight: 1.25,
      // fontSize: "0.6rem",
      color: Colors.dark.hard,
    },
  },
  palette: {
    primary: {
      main: "#0061A7",
      dark: "#06377B",
    },
    secondary: {
      light: "#D0D0D0",
      main: "#A8A8A8",
      dark: "#808080",
    },
    warning: {
      main: "#FF6F6F",
      light: "#FFE4E4",
    },
    success: {
      main: "#75D37F",
      light: "#E7FFDC",
    },
    info: {
      main: "#66A3FF",
      soft: "#EAF2FF",
    },
    custom: {
      grey: "#BCC8E7",
    },
  },
});

export default theme;
