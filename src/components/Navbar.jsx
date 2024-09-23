import React, { useState, useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "../styles/Navbar.css";
import { pathNameCONFIG } from "../config";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import { getLocalStorage } from "../utils/helpers";

const ButtonContent = styled(Button)(() => ({
  background: "#3f72af",
  borderRadius: "20px",
  // marginTop: "20px",
  padding: "15px 20px 15px 20px",
  color: "#ffffff",
  cursor: "pointer",
  fontWeight: "bold",
  "&:hover": {
    background: "#fc5185",
    textDecoration: "none",
  },
}));

function Navbar() {
  const history = useHistory();
  const [data, setData] = useState(null);

  useEffect(() => {
    const dataStorage = getLocalStorage("user");
    setData(dataStorage);
  }, []);

  const handleClick = () => {
    if (data) {
      history.push(pathNameCONFIG.DASHBOARD);
    } else {
      history.push(pathNameCONFIG.LOGIN);
    }
  };

  return (
    <nav>
      <div className="wrapper">
        <div className="logo">
          <a href="">Coding Mania</a>
        </div>
        <div className="menu">
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#courses">Courses</a>
            </li>
            <li>
              <a href="#tutors">Tutors</a>
            </li>
            <li>
              <a href="#partners">Partners</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
            <li>
              {/* <a href={pathNameCONFIG.LOGIN} className="tbl-biru">
                Log In
              </a> */}
              <ButtonContent
                variant="contained"
                color="primary"
                onClick={handleClick}
              >
                Login
              </ButtonContent>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
