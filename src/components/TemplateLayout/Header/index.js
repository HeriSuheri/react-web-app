import React, { useState, useContext, useEffect } from "react";
import { auth } from "../../../config/firebase";
import { signOut } from "firebase/auth";
import "./Header.css";
import { pathNameCONFIG } from "../../../config";
import { useHistory } from "react-router-dom";
// import { Button } from "@material-ui/core";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import { removeLocalStorage } from "../../../utils/helpers";
import ConfirmPopup from "../../../components/Popup/Confirm";
import PopUpInfo from "../../../components/Popup/Info";
import danger from "../../../assets/img/illustrationred.png";

const ButtonContent = styled(Button)(() => ({
  fontSize: "12px",
  fontWeight: "bold",
  background: "red",
  borderRadius: "20px",
  marginTop: "20px",
  padding: "10px 15px 10px 15px",
  color: "#ffffff",
  cursor: "pointer",
  "&:hover": {
    background: "orange",
    textDecoration: "none",
    border: "2px",
  },
}));

const Header = () => {
  const history = useHistory();
  const [error, setError] = useState({ open: false, message: "" });
  const [popUpLogOut, setPopUpLogOut] = useState(false);
  const [loadingLogOut, setLoadingLogOut] = useState(false);

  const handleLogOut = () => {
    setLoadingLogOut(true);
    signOut(auth)
      .then((res) => {
        setLoadingLogOut(false);
        removeLocalStorage("user");
        history.push(pathNameCONFIG.HOME);
      })
      .catch((err) => {
        setLoadingLogOut(false);
        setError({ open: true, message: err.message });
      });
  };

  return (
    <nav>
      <div className="wrapperHeader">
        <div className="logoHeader">
          <a href="/">Coding Mania</a>
        </div>
        <div className="menuHeader">
          <ButtonContent
            variant="outlined"
            color="warning"
            onClick={() => setPopUpLogOut(true)}
            // className="button"
            // style={{
            //   fontSize: "12px",
            //   fontWeight: "bold",
            //   background: "red",
            //   borderRadius: "20px",
            //   marginTop: "20px",
            //   padding: "10px 15px 10px 15px",
            //   color: "#ffffff",
            //   cursor: "pointer",
            //   // "&:hover": {
            //   //   background: "blue",
            //   //   textDecoration: "none",
            //   // },
            //   //   "@media screen and (max-width: 767px)": {
            //   //     width: "50%",
            //   //     height: "auto",
            //   //   },
            // }}
          >
            Log Out
          </ButtonContent>
        </div>
        {/* {error ? (
          <div className="error-user">
            <p className="errors">{error}</p>
          </div>
        ) : null} */}
      </div>
      <PopUpInfo
        title=""
        message=""
        img={danger}
        isOpen={error?.open}
        handleClose={() => {
          setError({ open: false, message: "" });
        }}
        submessage={<span style={{ color: "red" }}>{error?.message}</span>}
      />

      <ConfirmPopup
        isOpen={popUpLogOut}
        handleClose={() => setPopUpLogOut(false)}
        onContinue={handleLogOut}
        title="Confirmation"
        message="Are you sure want log out?"
        submessage=""
        loading={loadingLogOut}
      />
    </nav>
  );
};

export default Header;
