// main
import React from "react";
// import { I18nextProvider } from "react-i18next";

// libraries
import { Layout } from "antd";
import { makeStyles } from "@mui/styles";

// components
// import SideBarMenu from "./SideBarMenu";

const { Sider } = Layout;
const useStyles = makeStyles({
  sider: {
    fontFamily: "FuturaMdBT",
    position: "fixed",
    height: "100%",
    // width: "400px",
    left: 0,
    backgroundColor: "#e5edf8",
    overflowY: "auto",
    // zIndex: 1100,
    "&::-webkit-scrollbar": {
      display: "none",
    },
    // "@media screen and (max-width: 767px)": {
    //   backgroundColor: "rgba(0, 0, 0, 0.2)",
    // },
  },
  menu: {
    marginTop: "95px",
    paddingLeft: "10px",
    // "@media screen and (max-width: 767px)": {
    //   marginTop: "95px",
    // },
  },
});

const SideBar = () => {
  const classes = useStyles();

  return (
    // <I18nextProvider>
    <Sider
      data-test-id="sidebar-menu"
      width={200}
      className={classes.sider}
    >
      <div className={classes.menu}>
        {/* <SideBarMenu /> */}
        INI SIDEBAR
      </div>
    </Sider>
    // </I18nextProvider>
  );
};

export default SideBar;
