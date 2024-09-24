// main
import React, { useState, useEffect, Fragment } from "react";
import PropTypes from "prop-types";
import { Typography } from "antd";

// libraries
import { Modal, Fade, Backdrop } from "@material-ui/core";
import { makeStyles } from "@mui/styles";
import { CircularProgress } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { ReactComponent as XIcon } from "../../../assets/icon/close-blue.svg";
import Colors from "../../../utils/helpers/Colors";

// components
import GeneralButton from "../../Button/GeneralButton";
// import ButtonOutlined from "../../Button/ButtonOutlined";

// assets
import logo from "../../../assets/img/illustrationyellow.png";

const useStyles = makeStyles(() => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    width: 480,
    minHeight: 419,
    backgroundColor: "#fff",
    border: "1px solid #BCC8E7",
    padding: "36px 26px 22px 26px",
    alignItems: "center",
    borderRadius: 20,
    position: "relative",
    textAlign: "center",
  },
  title: {
    fontFamily: "FuturaMdBT",
    fontSize: 28,
  },
  progress: {
    display: "flex",
    justifyContent: "center",
    bottom: 30,
    marginTop: 20,
  },
  button: {
    display: "flex",
    justifyContent: "space-between",
    bottom: 30,
    marginTop: 20,
  },
  desc: {
    fontFamily: "FuturaBkBT",
    fontSize: 15,
  },
  message: {
    fontSize: 24,
    fontFamily: "FuturaMdBT",
    color: Colors.dark.hard,
  },
  xContainer: {
    display: "flex",
    justifyContent: "flex-end",
    "& .close": {
      "& :hover": {
        cursor: "pointer",
      },
    },
  },
}));

// ubah button disini
const buttonRedTheme = createTheme({
  palette: {
    primary: {
      // light: 'yellow',
      main: "#0061A7",
      // dark: 'green',
      contrastText: "#fff",
    },
  },
});

const ConfirmPopup = ({
  isOpen,
  handleClose,
  onContinue,
  title,
  loading,
  message,
  submessage,
  additionalText,
  height,
  imageIcon,
}) => {
  const classes = useStyles();
  const [titles, setTitles] = useState([]);
  useEffect(() => {
    if (title) {
      const temp = title.split("\\n");
      setTitles(temp);
    }
  }, [title]);

  return (
    <div>
      <Modal
        className={classes.modal}
        open={isOpen}
        // onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 900,
        }}
      >
        <Fade in={isOpen}>
          <div className={classes.paper}>
            <div className={classes.xContainer}>
              <XIcon
                className="close"
                onClick={handleClose}
                width={12}
                height={12}
              />
            </div>
            {titles.map((item) => (
              <h1 className={classes.title}>{item}</h1>
            ))}

            <img
              src={imageIcon || logo}
              style={{ paddingTop: 13 }}
              alt="Exclamation Triangle"
            />
            <Typography className={classes.message}>{message}</Typography>
            <p className={classes.desc}>{submessage}</p>
            {additionalText && additionalText}

            {loading ? (
              <div className={classes.progress}>
                <CircularProgress size={40} />
              </div>
            ) : (
              <div className={classes.button}>
                <ThemeProvider theme={buttonRedTheme}>
                  <GeneralButton
                    label="Yes"
                    width={157.5}
                    height="40px"
                    onClick={onContinue}
                    disabled={!!loading}
                  />
                </ThemeProvider>

                <GeneralButton
                  label="No"
                  width={157.5}
                  height="40px"
                  onClick={handleClose}
                  disabled={!!loading}
                />
              </div>
            )}
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

ConfirmPopup.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  onContinue: PropTypes.func,
  title: PropTypes.string,
  message: PropTypes.string,
  submessage: PropTypes.string,
  additionalText: PropTypes.node,
  height: PropTypes.string,
  imageIcon: PropTypes.node,
};

ConfirmPopup.defaultProps = {
  title: "Confirmation",
  message: "Are You Sure You Are Deleting Data?",
  submessage: "You can't undo this action",
  additionalText: <div> </div>,
  onContinue: () => {},
  height: 495,
  imageIcon: null,
};

export default ConfirmPopup;
