import React from "react";
import Button from "@material-ui/core/Button";
import PropTypes from "prop-types";
import { CircularProgress } from "@material-ui/core";
import classes from "./Button.css";

/* --------------------------------- START --------------------------------- */
const GeneralButton = ({
  label,
  iconPosition,
  buttonIcon,
  onClick,
  width,
  height,
  style,
  disabled,
  className,
  loading,
  type,
  variant,
}) => {
  let button;
  if (iconPosition === "endIcon") {
    button = (
      <Button
        className={classes.root}
        endIcon={buttonIcon}
        onClick={onClick}
        disabled={disabled || loading}
        style={{
          width,
          height,
          ...style,
        }}
        color="primary"
        variant={variant}
        type={type}
      >
        {loading ? <CircularProgress size={20} /> : label}
      </Button>
    );
  } else {
    button = (
      <Button
        className={classes.root}
        startIcon={buttonIcon}
        onClick={onClick}
        disabled={disabled || loading}
        style={{
          width,
          height,
          ...style,
        }}
        color="primary"
        variant={variant}
        type={type}
      >
        {loading ? <CircularProgress size={20} /> : label}
      </Button>
    );
  }
  return <React.Fragment>{button}</React.Fragment>;
};

GeneralButton.propTypes = {
  label: PropTypes.string,
  iconPosition: PropTypes.oneOf(["startIcon", "endIcon"]), // startIcon or endIcon
  style: PropTypes.object,
  buttonIcon: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  width: PropTypes.string,
  height: PropTypes.string,
  className: PropTypes.string,
  loading: PropTypes.bool,
  type: PropTypes.string,
  variant: PropTypes.oneOf(["contained", "text", "outlined"]),
};

GeneralButton.defaultProps = {
  label: "Submit",
  buttonIcon: "",
  iconPosition: "endIcon",
  width: "86px",
  height: "40px",
  disabled: false,
  className: "",
  style: {},
  loading: false,
  type: "button",
  variant: "contained",
};

export default GeneralButton;

// How to use...?
// A==> import MuiIconLabelButton
// import MuiIconLabelButton from '../../components/Button/MuiIconLabelButton';

// B==> import icon
// import { ReactComponent as AngleLeftIcon } from '../../assets/images/angle-left.svg';

// C==> set component
// <MuiIconLabelButton label="Tombol" iconPosition="startIcon" buttonIcon={<AngleLeftIcon/>}/>
