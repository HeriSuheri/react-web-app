import React, { useState, useEffect, useRef } from "react";

import { pathNameCONFIG } from "../config";

import "../styles/Login.css";

function Login() {
  // State for the "Remember me" checkbox
  const [rememberMe, setRememberMe] = useState(false);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here
  };

  return (
    <div className="wrapper1">
      <div className="login_box">
        <div className="login-header">
          <span>Login</span>
        </div>

        <div className="input_box">
          <input type="text" id="user" className="input-field" required />
          <label htmlFor="user" className="label">
            Username
          </label>
          <i className="bx bx-user icon"></i>
        </div>

        <div className="input_box">
          <input type="password" id="pass" className="input-field" required />
          <label htmlFor="pass" className="label">
            Password
          </label>
          <i className="bx bx-lock-alt icon"></i>
        </div>

        <div className="remember-forgot">
          <div className="remember-me">
            <input
              type="checkbox"
              id="remember"
              checked={rememberMe}
              onChange={() => setRememberMe(!rememberMe)}
            />
            <label htmlFor="remember">Remember me</label>
          </div>

          <div className="forgot">
            <div className="zoom">
              <a href="#">Forgot password?</a>
            </div>
          </div>
        </div>

        <div className="input_box">
          <input
            type="submit"
            className="input-submit"
            value="Login"
            onClick={handleSubmit}
          />
        </div>

        <div className="regis">
          <div>Don't have an account? </div>
          <div className="zoom">
            <a href="#" style={{ color: "#DCDCDC", marginLeft: "10px" }}>
              Register
            </a>
          </div>
        </div>
        <div className="regis">
          <div>Back to </div>
          <div className="zoom">
            <a
              href={pathNameCONFIG.ROOT_URL}
              className="zoom"
              style={{
                color: "blue",
                marginLeft: "10px",
                fontWeight: "50px",
                fontSize: "20px",
              }}
            >
              HOME
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
