import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../config/firebase";
import { sendPasswordResetEmail } from "firebase/auth";

import { pathNameCONFIG } from "../config";
import PopUpInfo from "../components/Popup/Info";
import danger from "../assets/img/illustrationred.png";
import { CircularProgress } from "@mui/material";

import "../styles/Login.css";

function ForgotPassword() {
  const history = useHistory();
  const [error, setError] = useState({ open: false, message: "" });
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [popup, setPopup] = useState(false);
  const [loadingForgot, setLoadingForgot] = useState(false);

  // useEffect(() => {
  //   if (error) {
  //     setTimeout(() => {
  //       setError("");
  //     }, 3500);
  //   }
  // }, [error]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoadingForgot(true);
    setEmailError(false);
    sendPasswordResetEmail(auth, email)
      .then((res) => {
        setLoadingForgot(false);
        setPopup(true);
      })
      .catch((err) => {
        setLoadingForgot(false);
        setError({ open: true, message: err.message });
      })
  };

  const onTypeEmail = (e) => {
    if (e.target.value) {
      setEmailError(false);
    } else {
      setEmailError(true);
    }
    setEmail(e.target.value);
  };

  return (
    <div className="wrapper3">
      <div className="login_box">
        <div className="login-header-forgot">
          <span>Forgot Password</span>
        </div>

        <div className="input_box">
          <input
            type="text"
            id="user"
            className="input-field"
            onChange={onTypeEmail}
            value={email}
            required
            autoComplete="off"
          />
          <label htmlFor="user" className="label">
            Email
          </label>
          <i className="bx bx-user icon"></i>
        </div>
        {emailError ? (
          <div className="error-user">
            <p className="errors">Please enter Email</p>
          </div>
        ) : null}

        {loadingForgot ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "10px",
            }}
          >
            <CircularProgress color="inherit" size={40} />
          </div>
        ) : (
          <div className="input_box">
            <input
              type="submit"
              className="input-submit"
              value="SEND EMAIL"
              onClick={handleSubmit}
              disabled={!email || emailError}
              style={{
                color: "#808080",
                cursor: !email || emailError ? "not-allowed" : "pointer",
              }}
            />
          </div>
        )}

        {/* {error ? (
          <div className="error-user">
            <p className="errors">{error}</p>
          </div>
        ) : null} */}

        <div className="regis">
          <div className="text">Don't have an account ? </div>
          <div className="zoom">
            <Link
              className="text"
              to={pathNameCONFIG.REGISTRASI}
              style={{ color: "white" }}
            >
              Sign Up
            </Link>
          </div>
        </div>
        <div className="regis">
          <div className="text">Already have an account ? </div>
          <div className="zoom">
            <Link
              className="text"
              to={pathNameCONFIG.LOGIN}
              style={{ color: "white" }}
            >
              Login
            </Link>
          </div>
        </div>
      </div>
      <PopUpInfo
        title=""
        message=""
        isOpen={popup}
        handleClose={() => {
          setPopup(false);
          history.push(pathNameCONFIG.LOGIN);
        }}
        submessage="Please verify your email to reset your password !"
      />

      <PopUpInfo
        title=""
        message=""
        img={danger}
        isOpen={error?.open}
        handleClose={() => {
          setError({ open: false, message: "" });
          // history.push(pathNameCONFIG.LOGIN);
        }}
        submessage={<span style={{ color: "red" }}>{error?.message}</span>}
      />
    </div>
  );
}

export default ForgotPassword;
