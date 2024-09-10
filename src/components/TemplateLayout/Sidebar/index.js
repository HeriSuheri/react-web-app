// main
import React from "react";
// import { I18nextProvider } from "react-i18next";

// libraries
import { Layout } from "antd";
// import { makeStyles } from "@material-ui/core";

// components
import SideBarMenu from "./Sidebarmenu";

const { Sider } = Layout;

const SideBar = () => {
  //   const useStyles = makeStyles({
  //     sider: {
  //       fontFamily: "FuturaMdBT",
  //       position: "fixed",
  //       height: "100%",
  //       left: 0,
  //       backgroundColor: "#fff",
  //       overflowY: "auto",
  //       zIndex: 1100,
  //       "&::-webkit-scrollbar": {
  //         display: "none",
  //       },
  //     },
  //   });
  //   const classes = useStyles();

  return (
    <Sider
      data-test-id="sidebar-menu"
      width={150}
      style={{
        fontFamily: "FuturaMdBT",
        position: "fixed",
        height: "100%",
        left: 0,
        backgroundColor: "#fff",
        overflowY: "auto",
        zIndex: 1100,
        "&::-webkit-scrollbar": {
          display: "none",
        },
      }}
    >
      <div style={{ marginTop: 60 }}>
        {/* <SideBarMenu /> */}
        INI SIDE BAR
      </div>
    </Sider>
  );
};

export default SideBar;
