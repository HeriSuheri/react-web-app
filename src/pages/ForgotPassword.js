import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../config/firebase";
import { sendPasswordResetEmail } from "firebase/auth";

import { pathNameCONFIG } from "../config";
import PopUpInfo from "../components/Popup/Info";

import "../styles/Login.css";

function ForgotPassword() {
  const history = useHistory();
  const [error, setError] = useState(null);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [popup, setPopup] = useState(false);

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        setError("");
      }, 3500);
    }
  }, [error]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmailError(false);
    sendPasswordResetEmail(auth, email)
      .then((res) => {
        setPopup(true);
      })
      .catch((err) => setError(err.message));
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

        <div className="input_box">
          <input
            type="submit"
            className="input-submit"
            value="SEND EMAIL"
            onClick={handleSubmit}
            disabled={!email || emailError || error}
            style={{
              color: "#808080",
              cursor: !email || emailError || error ? "not-allowed" : "pointer",
            }}
          />
        </div>
        {error ? (
          <div className="error-user">
            <p className="errors">{error}</p>
          </div>
        ) : null}

        <div className="regis">
          <div className="text">Don't have an account ? </div>
          <div className="zoom">
            <Link
              className="text"
              to={pathNameCONFIG.REGISTRASI}
              style={{ color: "white"}}
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
        isOpen={popup}
        handleClose={() => {
          setPopup(false);
          history.push(pathNameCONFIG.LOGIN);
        }}
        submessage="Please verify your email to reset your password !"
      />
    </div>
  );
}

export default ForgotPassword;
