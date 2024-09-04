import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import { auth } from "../config/firebase";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";

import { pathNameCONFIG } from "../config";
import PopUpInfo from "../components/Popup/Info";

import "../styles/Login.css";

function Registrasi() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [error, setError] = useState(null);
  const [errorMatchPassword, setErrorMatchPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [confPasswordError, setConfPasswordError] = useState(false);
  const [popup, setPopup] = useState(false);

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        setError("");
      }, 3500);
    }
  }, [error]);

  const validatePassword = () => {
    let isValid = true;
    if (password !== "" && confirmPassword !== "") {
      if (password !== confirmPassword) {
        isValid = false;
        setError("Passwords does not match");
      }
    }
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmailError(false);
    setPasswordError(false);
    setConfPasswordError(false);
    if (validatePassword()) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((res) => {
          sendEmailVerification(auth.currentUser)
            .then(() => {
              setPopup(true);
            })
            .catch((err) => setError(err.message));
        })
        .catch((err) => setError(err.message));
    }
  };

  const onTypeEmail = (e) => {
    if (e.target.value) {
      setEmailError(false);
    } else {
      setEmailError(true);
    }
    setEmail(e.target.value);
  };

  const onTypePassword = (e) => {
    if (e.target.value) {
      setPasswordError(false);
      if (e.target.value.length  && e.target.value !== confirmPassword) {
        setErrorMatchPassword(true);
      } else {
        setErrorMatchPassword(false);
      }
    } else {
      setPasswordError(true);
    }
    setPassword(e.target.value);
  };

  const onTypeConfPassword = (e) => {
    if (e.target.value) {
      setConfPasswordError(false);
      if (e.target.value.length && e.target.value !== password) {
        setErrorMatchPassword(true);
      } else {
        setErrorMatchPassword(false);
      }
    } else {
      setConfPasswordError(true);
    }
    setConfirmPassword(e.target.value);
  };

  return (
    <div className="wrapper2">
      <div className="login_box">
        <div className="login-header">
          <span>Sign Up</span>
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
            type="password"
            id="pass"
            className="input-field"
            onChange={onTypePassword}
            value={password}
            required
          />
          <label htmlFor="pass" className="label">
            Password
          </label>
        </div>

        {passwordError ? (
          <div className="error-user">
            <p className="errors">Please enter Password</p>
          </div>
        ) : null}

        <div className="input_box">
          <input
            type="password"
            id="confPass"
            className="input-field-conf"
            value={confirmPassword}
            required
            onChange={onTypeConfPassword}
          />
          <label htmlFor="confPass" className="labelConf">
            Confirm Password
          </label>
          <i className="bx bx-lock-alt icon"></i>
        </div>

        {confPasswordError ? (
          <div className="error-user">
            <p className="errors">Please enter Confirm Password</p>
          </div>
        ) : null}

        <div className="input_box">
          <input
            type="submit"
            className="input-submit"
            value="Register"
            onClick={handleSubmit}
            disabled={
              !email ||
              !password ||
              !confirmPassword ||
              emailError ||
              passwordError ||
              confPasswordError ||
              errorMatchPassword ||
              error
            }
            style={{
              color: "#808080",
              cursor:
                !email ||
                !password ||
                !confirmPassword ||
                emailError ||
                passwordError ||
                confPasswordError ||
                errorMatchPassword ||
                error
                  ? "not-allowed"
                  : "pointer",
            }}
          />
        </div>
        {error ? (
          <div className="error-user">
            <p className="errors">{error}</p>
          </div>
        ) : null}
        {errorMatchPassword ? (
          <div className="error-user">
            <p className="errors">"Password doesn't match"</p>
          </div>
        ) : null}

        <div className="regis">
          <div>Already have an account ? </div>
          <div className="zoom">
            <Link
              to={pathNameCONFIG.LOGIN}
              style={{ color: "white", marginLeft: "10px" }}
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
        submessage="Please verify your email to activate your account !"
      />
    </div>
  );
}

export default Registrasi;
