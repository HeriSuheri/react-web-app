import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import { auth } from "../config/firebase";
import {
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { CircularProgress } from "@mui/material";
import { pathNameCONFIG } from "../config";
import { setLocalStorage } from "../utils/helpers";

import "../styles/Login.css";
import { setLoading } from "../stores/actions/login";
import PopUpInfo from "../components/Popup/Info";
import danger from "../assets/img/illustrationred.png";

function Login() {
  const dispatch = useDispatch();
  const history = useHistory();
  // State for the "Remember me" checkbox
  // const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState({ open: false, message: "" });
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [popup, setPopup] = useState(false);
  const [loadingLogin, setLoadingLogin] = useState(false);

  // useEffect(() => {
  //   if (error) {
  //     setTimeout(() => {
  //       setError("");
  //     }, 3500);
  //   }
  // }, [error]);

  useEffect(() => {
    if (currentUser) {
      setLocalStorage("user", currentUser);
      history.push(pathNameCONFIG.DASHBOARD);
    }
  }, [currentUser]);

  // useEffect(() => {
  //   if (loadingLogin) {
  //     setTimeout(() => {
  //       setLoadingLogin(false);
  //       history.push(pathNameCONFIG.DASHBOARD);
  //     }, 3500);
  //   }
  // }, [loadingLogin]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoadingLogin(true);
    setEmailError(false);
    setPasswordError(false);
    signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        if (res?.user.emailVerified) {
          setLoadingLogin(false);
          onAuthStateChanged(auth, (user) => {
            setCurrentUser(user);
          });
        } else {
          setLoadingLogin(false);
          setPopup(true);
        }
      })
      .catch((err) => {
        setLoadingLogin(false);
        setError({ open: true, message: err.message });
      });
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
    } else {
      setPasswordError(true);
    }
    setPassword(e.target.value);
  };

  return (
    <div>
      <div className="wrapper1">
        <div className="login_box">
          <div className="login-header">
            <span>Login</span>
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
            <i className="bx bx-lock-alt icon"></i>
          </div>
          {passwordError ? (
            <div className="error-user">
              <p className="errors">Please enter Password</p>
            </div>
          ) : null}

          <div className="remember-forgot">
            {/* <div className="remember-me">
            <input
              type="checkbox"
              id="remember"
              checked={rememberMe}
              onChange={() => setRememberMe(!rememberMe)}
            />
            <label htmlFor="remember">Remember me</label>
          </div> */}

            <div className="forgot">
              <div className="zoom">
                <Link to={pathNameCONFIG.FORGOT_PASSWORD} className="text">
                  Forgot password?
                </Link>
              </div>
            </div>
          </div>

          {loadingLogin ? (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginBottom: "10px",
              }}
            >
              <CircularProgress size={40} />
            </div>
          ) : (
            <div className="input_box">
              <input
                type="submit"
                className="input-submit"
                value="Login"
                onClick={handleSubmit}
                disabled={!email || !password || emailError || passwordError}
                style={{
                  color: "#808080",
                  cursor:
                    !email || !password || emailError || passwordError
                      ? "not-allowed"
                      : "pointer",
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
                style={{ color: "blue" }}
              >
                Sign Up
              </Link>
            </div>
          </div>
          <div className="regis">
            <div className="text">Back to </div>
            <div className="zoom">
              <Link
                to={pathNameCONFIG.ROOT_URL}
                className="text"
                style={{
                  color: "blue",
                }}
              >
                HOME
              </Link>
            </div>
          </div>
        </div>
      </div>
      <PopUpInfo
        title=""
        message=""
        isOpen={popup}
        handleClose={() => {
          signOut(auth);
          setPopup(false);
        }}
        submessage="Please verify your email first !"
      />

      <PopUpInfo
        title=""
        message=""
        isOpen={error?.open}
        img={danger}
        handleClose={() => {
          signOut(auth);
          setError({ open: false, message: "" });
        }}
        submessage={<span style={{ color: "red" }}>{error?.message}</span>}
      />
    </div>
  );
}

export default Login;
