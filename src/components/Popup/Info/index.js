/* eslint-disable react/self-closing-comp */
// main
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

// libraries
import { Modal, Fade, Backdrop, SvgIcon, Paper } from "@material-ui/core";
import { Typography } from "antd";
import Colors from "../../../utils/helpers/Colors";
import { ReactComponent as XIcon } from "../../../assets/icon/close-blue.svg";
import GeneralButton from "../../Button/GeneralButton";

// assets
import check from "../../../assets/img/illustrationyellow.png";

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
  const [titles, setTitles] = useState([]);

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
        // className={classes.modal}
        open={isOpen}
        closeAfterTransition
        BackdropComponent={Backdrop}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "600px",
          height: "600px",
          padding: "20px",
          backgroundColor: "white",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
          zIndex: "1000",
        }}
      >
        <Fade in={isOpen}>
          <div
            style={{
              height,
              width: 480,
              backgroundColor: "#fff",
              border: "1px solid #BCC8E7",
              padding: closeModal ? 30 : 32,
              alignItems: "center",
              borderRadius: 20,
              position: "relative",
              textAlign: "center",
              "@media screen and (min-width: 565px)": {
                width: "480px",
                height: "480px",
              },
              "@media screen and (max-width: 564px)": {
                width: "70%",
                height: "auto",
              },
            }}
          >
            {closeModal ? (
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  "& .close": {
                    "& :hover": {
                      cursor: "pointer",
                    },
                  },
                }}
              >
                <XIcon
                  className="close"
                  onClick={handleClose}
                  style={{ cursor: "pointer" }}
                />
              </div>
            ) : null}
            <div style={{}}>
              {titles
                ? titles.map((item) => (
                    <p
                      style={{
                        ...(titlefontSize && { fontSize: titlefontSize }),
                        fontFamily: "FuturaMdBT",
                        fontSize: 36,
                        fontWeight: 900,
                        color: Colors.dark.hard,
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
                  fontSize: 25,
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
  title: "",
  message: "",
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
