import React from "react";
import Button from '@mui/material/Button';
import { makeStyles } from "@mui/styles";
import PropTypes from "prop-types";
import { CircularProgress } from  '@mui/material';


const useStyles = makeStyles({
  root: {
    fontFamily: "FuturaMdBT",
    fontSize: 15,
    lineHeight: "15px",
    textAlign: "center",
    textTransform: "capitalize",
    borderRadius: "8px",
    boxShadow: "0px 6px 6px 2px rgba(120, 191, 254, 0.12)",
    padding: "0 20px 0px",
    "&:hover": {
      boxShadow: "0px 6px 6px 2px rgba(120, 191, 254, 0.12)",
    },
    "&.MuiButton-containedPrimary.Mui-disabled": {
      backgroundColor: "#BCC8E7",
      color: "#fff",
    },
    "&.MuiButton-text": {
      boxShadow: "none",
    },
    "@media screen and (max-width: 576px)": {
      width: "44vw !important",
      marginRight: "0% !important",
      marginLeft: "0% !important",
    },
  },
});

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
  const classes = useStyles();

  let button;
  if (iconPosition === "endIcon") {
    button = (
      <Button
        className={className ? `${className} ${classes.root}` : classes.root}
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
        className={className ? `${className} ${classes.root}` : classes.root}
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
