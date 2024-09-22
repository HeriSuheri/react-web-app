/* eslint-disable react/self-closing-comp */
// main
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

// libraries
import { Modal, Fade, Backdrop, SvgIcon, Paper } from "@material-ui/core";

import { makeStyles } from "@mui/styles";
import { Typography } from "antd";
import Colors from "../../../utils/helpers/Colors";
import { ReactComponent as XIcon } from "../../../assets/icon/close-blue.svg";
import GeneralButton from "../../Button/GeneralButton";

// assets
import check from "../../../assets/img/illustrationyellow.png";
const useStyles = makeStyles(() => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "auto",
  },
  paper: {
    width: 480,
    // height: 495,,
    backgroundColor: "#fff",
    border: "1px solid #BCC8E7",
    padding: 30,
    alignItems: "center",
    borderRadius: 20,
    position: "relative",
    textAlign: "center",
  },
  content: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontFamily: "FuturaMdBT",
    fontSize: 36,
    fontWeight: 900,
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

const SuccessConfirmation = ({
  isOpen,
  handleClose,
  title,
  message,
  submessage,
  height,
  img,
  closeModal,
  button,
  titlefontSize,
  widthMessage,
  subMessages,
}) => {
  const classes = useStyles();
  const [titles, setTitles] = useState([]);
  const [newSubMessages, setNewSubMessages] = useState([]);

  useEffect(() => {
    if (title) {
      const temp = title.split("\\n");
      setTitles(temp);
    }
  }, [title]);

  const renderSubMessage = () => {
    const render = subMessages?.split(/\r?\n/)?.map((text, index) => (
      <div
        key={index}
        style={{
          fontFamily: "FuturaBkBT",
          fontSize: 15,
          color: Colors.dark.hard,
        }}
      >
        {text}
        <br />
      </div>
    ));
    return render;
  };

  return (
    <div>
      <Modal
        className={classes.modal}
        open={isOpen}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
      >
        <Fade in={isOpen}>
          <div className={classes.paper} style={{ height }}>
            {closeModal ? (
              <div className={classes.xContainer}>
                <XIcon className="close" onClick={handleClose} />
              </div>
            ) : null}
            <div className={classes.content}>
              {titles
                ? titles.map((item) => (
                    <p
                      className={classes.title}
                      style={{
                        ...(titlefontSize && { fontSize: titlefontSize }),
                      }}
                    >
                      {item}
                    </p>
                  ))
                : null}
              <img
                src={img || check}
                alt="check"
                style={{ marginTop: titles ? 40 : 0 }}
                width="160"
              />
              <Typography
                style={{
                  fontSize: 24,
                  marginTop: 20,
                  fontFamily: "FuturaMdBT",
                  color: Colors.dark.hard,
                  width: widthMessage,
                }}
              >
                {message}
              </Typography>
              <div
                style={{
                  fontFamily: "FuturaBkBT",
                  fontSize: 15,
                  color: Colors.dark.hard,
                }}
              >
                {submessage}
              </div>
              {subMessages ? renderSubMessage() : null}
              {button ? (
                <GeneralButton
                  label="OK"
                  width="380px"
                  height="40px"
                  onClick={handleClose}
                  style={{
                    marginTop: 45,
                    fontFamily: "FuturaMdBT",
                    fontSize: 15,
                    position: "aboslute",
                    bottom: 0,
                    borderRadius: "50px",
                  }}
                />
              ) : null}
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

SuccessConfirmation.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  title: PropTypes.string,
  message: PropTypes.string,
  submessage: PropTypes.string || PropTypes.node,
  height: PropTypes.string,
  img: PropTypes.node,
  closeModal: PropTypes.bool,
  button: PropTypes.bool,
  titlefontSize: PropTypes.number,
  widthMessage: PropTypes.number,
  subMessages: PropTypes.string,
};

SuccessConfirmation.defaultProps = {
  title: "Please Wait For Approval",
  message: "Saved Successfully",
  submessage: "",
  widthMessage: null,
  height: "auto",
  img: check,
  closeModal: true,
  button: true,
  titlefontSize: 28,
  subMessages: "",
};

export default SuccessConfirmation;
