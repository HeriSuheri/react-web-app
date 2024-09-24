// TextStyle Component
// --------------------------------------------------------
import React from "react";
import PropTypes from "prop-types";
import classname from "classnames";
import Typography from "@mui/material/Typography";
import { ThemeProvider } from "@mui/material";
import theme from "../Popup/Others/theme";

const TextStyle = ({
  className,
  color,
  weight,
  children,
  variant,
  size,
  sx,
  gutterBottom,
  fontFamily,
  ...others
}) => {
  const classNames = classname("a-text-style", className, color, weight);
  return (
    <ThemeProvider theme={theme}>
      <Typography
        variant={variant}
        sx={{
          color,
          fontWeight: weight,
          fontSize: size,
          whiteSpace: "pre-line",
          ...sx,
        }}
        className={classNames}
        fontFamily={fontFamily}
        gutterBottom={gutterBottom}
        {...others}
      >
        {children}
      </Typography>
    </ThemeProvider>
  );
};

TextStyle.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  weight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  variant: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  sx: PropTypes.object,
  children: PropTypes.node,
  fontFamily: PropTypes.string,
  gutterBottom: PropTypes.bool,
};

TextStyle.defaultProps = {
  className: "",
  color: "",
  weight: "400",
  variant: "body2",
  size: "17px",
  children: "",
  sx: {},
  fontFamily: "Futura",
  gutterBottom: false,
};

export default TextStyle;
