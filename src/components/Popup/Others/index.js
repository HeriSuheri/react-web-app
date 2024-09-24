// Popup Component
// --------------------------------------------------------
import React, { Fragment } from "react";
import PropTypes from "prop-types";
import classname from "classnames";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import { IconButton, ThemeProvider } from "@mui/material";
import theme from "./theme";
// import { TextStyle, InputText, Icon } from "../../atoms";
import InputText from "../../InputText";
import Button from "@mui/material/Button";
import Colors from "../../../utils/helpers/Colors";
import TextStyle from "../../TextStyle";

const PopUpDialog = styled(Dialog)(({ theme }) => ({
  "& .MuDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const ImageWrapper = styled("div")(() => ({
  display: "flex",
  justifyContent: "center",
}));

const Popup = ({
  open,
  className,
  language,
  errorCode,
  reffCode,
  onClose,
  onClickAction,
  imgSrc,
  title,
  subtitle,
  text,
  subtext,
  telp,
  buttonText,
  actionButtonText,
  isClickOutside,
  type,
  input,
  children,
  isLarge,
  isReverseButton,
  width,
  height,
  isCustomerCare,
  noMargin,
  isCrossButton,
  subLabel,
  notifTitle,
}) => {
  const classNames = classname("m-popup", className);

  return (
    <ThemeProvider theme={theme}>
      <PopUpDialog
        onClose={isClickOutside ? onClose : () => {}}
        aria-labelledby="popup-dialog-title"
        className={classNames}
        sx={{
          ".MuiPaper-root": {
            maxWidth: width === "0px" ? (isLarge ? "770px" : "480px") : width,
            width: width === "0px" ? (isLarge ? "770px" : "480px") : width,
            borderRadius: "20px",
            height: height === "0px" ? (isLarge ? "660px" : "auto") : height,
          },
          "@media screen and (max-width: 767px)": {
            ".MuiPaper-root": {
              minWidth: "500px",
              height: "auto",
            },
          }
        }}
        open={open}
      >
        {type === "otp" && (
          <Fragment>
            {/* OTP START HERE */}
            {title && (
              <DialogTitle
                id="popup-dialog-title"
                sx={{
                  textAlign: "center",
                  fontWeight: 700,
                  lineHeight: "2.344rem",
                  fontSize: "2rem",
                  color: Colors.dark.hard,
                  padding: "30px 20px",
                }}
              >
                {title}
              </DialogTitle>
            )}
            <DialogContent
              sx={{
                justifyContent: "center",
                textAlign: "center",
                padding: "0px 40px",
                paddingBottom: "116px",
              }}
            >
              {(errorCode || reffCode) && (
                <TextStyle
                  sx={{
                    marginBottom: "0px",
                    letterSpacing: "0.03em",
                    lineHeight: "24px",
                  }}
                  weight={400}
                  size="13px"
                  fontFamily="FuturaBkBT"
                >
                  {`${reffCode}  ${
                    reffCode && errorCode ? "-" : ""
                  } ${errorCode}`}
                </TextStyle>
              )}
              {text && (
                <TextStyle
                  weight={500}
                  size="24px"
                  gutterBottom
                  sx={{ color: Colors.primary.dark }}
                >
                  {text}
                </TextStyle>
              )}
              {notifTitle && (
                <TextStyle
                  fontFamily="FuturaHvBT"
                  weight={400}
                  size="17px"
                  gutterBottom
                >
                  {notifTitle}
                </TextStyle>
              )}
              {subtitle && (
                <TextStyle weight={400} size="17px" gutterBottom>
                  {subtitle}
                </TextStyle>
              )}
              {subLabel && (
                <TextStyle
                  weight={400}
                  fontFamily="FuturaBkBT"
                  size="13px"
                  gutterBottom
                >
                  {subLabel}
                </TextStyle>
              )}
              {telp && (
                <TextStyle
                  weight={400}
                  size="17px"
                  gutterBottom
                  sx={{ color: Colors.primary.dark }}
                >
                  {telp}
                </TextStyle>
              )}
              {input && (
                <TextStyle size="13px" gutterBottom sx={{ textAlign: "start" }}>
                  {input}
                </TextStyle>
              )}
              {
                <InputText
                  type="text"
                  placeholder="Masukkan Kode OTP"
                  size="sm"
                  autoComplete="off"
                />
              }
            </DialogContent>
            <DialogActions
              sx={{
                justifyContent: "center",
                textAlign: "center",
                padding: "15px 20px",
              }}
            >
              <Button
                full
                variant="contained"
                onClick={onClose}
                style={{ maxWidth: "none" }}
              >
                {buttonText}
              </Button>
            </DialogActions>
            {/* OTP END HERE */}
          </Fragment>
        )}

        {type === "others" && <Fragment>{children}</Fragment>}
        {(type === "standard" || type === "choice") && (
          <Fragment>
            {(title || isCrossButton) && (
              <DialogTitle
                id="popup-dialog-title"
                sx={{
                  fontFamily: "FuturaMdBT",
                  fontSize: "21px",
                  fontWeight: 700,
                  lineHeight: "25px",
                  color: Colors.dark.hard,
                  textAlign: "center",
                  padding: "20px 20px 10px",
                }}
              >
                {isCrossButton && (
                  <div style={{ display: "flex", justifyContent: "end" }}>
                    <IconButton
                      onClick={onClose}
                      style={{ padding: 0, path: { fill: Colors.dark.hard } }}
                    >
                      {/* <Icon
                        height="18"
                        width="18"
                        name="x"
                        color={Colors.primary.hard}
                      /> */}
                    </IconButton>
                  </div>
                )}
                {title || ""}
              </DialogTitle>
            )}

            {imgSrc && (
              <ImageWrapper style={{ marginTop: title ? 10 : 20 }}>
                <img
                  src={imgSrc}
                  alt="img-popup"
                  loading="lazy"
                  style={{
                    width: "160px",
                    height: "160px",
                    objectFit: "contain",
                  }}
                />
              </ImageWrapper>
            )}

            <DialogContent
              sx={{
                justifyContent: "center",
                textAlign: "center",
                padding: "20px 20px 10px 20px",
              }}
            >
              {subtitle && (
                <TextStyle
                  weight={400}
                  fontFamily="FuturaHvBT"
                  size="17px"
                  sx={{
                    lineHeight: "20.38px",
                    letterSpacing: "0.01em",
                    color: Colors.dark.hard,
                    marginBottom: "10px",
                  }}
                >
                  {subtitle}
                </TextStyle>
              )}

              {text && (
                <TextStyle
                  sx={{
                    marginBottom: noMargin === true ? "0px" : "20px",
                    letterSpacing: "0.03em",
                    lineHeight: "24px",
                  }}
                  weight={400}
                  size="15px"
                  fontFamily="FuturaBkBT"
                >
                  {text}
                </TextStyle>
              )}
              {subtext && (
                <TextStyle weight={300} size="15px" gutterBottom>
                  {subtext}
                </TextStyle>
              )}

              {isCustomerCare && (
                <Fragment>
                  {language === "id" ? (
                    <TextStyle
                      fontFamily="FuturaBkBT"
                      weight={400}
                      size="13px"
                      gutterBottom
                    >
                      Hubungi Nobu Contact Care di 1500278{" "}
                      {/* <a
                    href="tel:1500 286"
                    style={{
                      textDecoration: "none",
                      color: Colors.primary.hard,
                      fontWeight: 900,
                    }}
                  >
                    1500286{" "}
                  </a> */}
                      untuk informasi lebih lanjut.
                    </TextStyle>
                  ) : (
                    <TextStyle
                      fontFamily="FuturaBkBT"
                      weight={400}
                      size="13px"
                      gutterBottom
                    >
                      Contact the Nobu Contact Care at 1500278{" "}
                      {/* <a
                    href="tel:1500 286"
                    style={{
                      textDecoration: "none",
                      color: Colors.primary.hard,
                      fontWeight: 900,
                    }}
                  >
                    1500286{" "}
                  </a> */}
                      for more information.
                    </TextStyle>
                  )}
                </Fragment>
              )}
            </DialogContent>

            {type === "standard" && (
              <DialogActions
                sx={{
                  justifyContent: "center",
                  textAlign: "center",
                  padding: "15px 20px",
                }}
              >
                <Button
                  full
                  variant="contained"
                  onClick={onClose}
                  style={{ maxWidth: "none" }}
                >
                  <TextStyle
                    fontFamily="FuturaMdBT"
                    weight={700}
                    color={Colors.white}
                    size="15px"
                  >
                    {buttonText}
                  </TextStyle>
                </Button>
              </DialogActions>
            )}

            {type === "choice" && (
              <DialogActions
                sx={{
                  justifyContent: "space-between",
                  padding: "15px 20px",
                }}
              >
                <Button
                  size="lg"
                  variant="outlined"
                  onClick={isReverseButton ? onClose : onClickAction}
                  style={{ width: "197.5px" }}
                >
                  <TextStyle
                    fontFamily="FuturaMdBT"
                    weight={700}
                    color={Colors.primary.hard}
                    size="15px"
                  >
                    {actionButtonText}
                  </TextStyle>
                </Button>
                <Button
                  size="lg"
                  variant="contained"
                  onClick={isReverseButton ? onClickAction : onClose}
                  style={{ width: "197.5px" }}
                >
                  <TextStyle
                    fontFamily="FuturaMdBT"
                    weight={700}
                    color={Colors.white}
                    size="15px"
                  >
                    {buttonText}
                  </TextStyle>
                </Button>
              </DialogActions>
            )}
          </Fragment>
        )}
      </PopUpDialog>
    </ThemeProvider>
  );
};

Popup.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  language: PropTypes.string,
  errorCode: PropTypes.string,
  reffCode: PropTypes.string,
  text: PropTypes.string,
  subtext: PropTypes.string,
  telp: PropTypes.string,
  input: PropTypes.string,
  buttonText: PropTypes.string,
  className: PropTypes.string,
  imgSrc: PropTypes.string,
  actionButtonText: PropTypes.string,
  isClickOutside: PropTypes.bool,
  type: PropTypes.oneOf(["standard", "choice", "otp", "others"]),
  onClickAction: PropTypes.func,
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node,
  isLarge: PropTypes.bool,
  isReverseButton: PropTypes.bool,
  width: PropTypes.string,
  height: PropTypes.string,
  isCustomerCare: PropTypes.bool,
  isCrossButton: PropTypes.bool,
  noMargin: PropTypes.bool,
  subLabel: PropTypes.string,
  notifTitle: PropTypes.string,
};
Popup.defaultProps = {
  title: "",
  subtitle: "",
  language: "id",
  errorCode: "",
  reffCode: "",
  text: "",
  telp: "",
  subtext: "",
  buttonText: "",
  className: "",
  imgSrc: "",
  input: "",
  actionButtonText: "",
  isClickOutside: false,
  type: "standard",
  onClickAction: () => {},
  children: "",
  isLarge: false,
  isReverseButton: false,
  width: "0px",
  height: "0px",
  isCustomerCare: false,
  noMargin: false,
  isCrossButton: false,
  subLabel: "",
  notifTitle: "",
};

export default Popup;
