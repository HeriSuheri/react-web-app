import React, { useState, useContext, useEffect } from "react";
import { auth } from "../../../config/firebase";
import { signOut } from "firebase/auth";
import "./Header.css";
import { pathNameCONFIG } from "../../../config";
import { useHistory } from "react-router-dom";
import { Button } from "@material-ui/core";
import { removeLocalStorage } from "../../../utils/helpers";

const Header = () => {
  const history = useHistory();
  const [error, setError] = useState(null);
  const handleLogOut = () => {
    signOut(auth)
      .then((res) => {
        removeLocalStorage("user");
        history.push(pathNameCONFIG.HOME);
      })
      .catch((err) => setError(err.message));
  };

  return (
    <nav>
      <div className="wrapperHeader">
        <div className="logoHeader">
          <a href="/">Coding Mania</a>
        </div>
        <div className="menuHeader">
          <Button
            variant="outlined"
            color="warning"
            onClick={handleLogOut}
            className="button"
            style={{
              fontSize: "12px",
              fontWeight: "bold",
              background: "red",
              borderRadius: "20px",
              marginTop: "20px",
              padding: "10px 15px 10px 15px",
              color: "#ffffff",
              cursor: "pointer",
              "&:hover": {
                background: "blue",
                textDecoration: "none",
              },
              //   "@media screen and (max-width: 767px)": {
              //     width: "50%",
              //     height: "auto",
              //   },
            }}
          >
            Log Out
          </Button>
        </div>
        {error ? (
          <div className="error-user">
            <p className="errors">{error}</p>
          </div>
        ) : null}
      </div>
    </nav>
  );
};

export default Header;
