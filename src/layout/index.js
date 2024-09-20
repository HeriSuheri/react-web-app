import React, { useState } from "react";
import { useHistory } from "react-router-dom";

// libraries
import { Layout, Grid } from "antd";
import "./layout.css";
import { makeStyles } from "@mui/styles";

// components
import Header from "../components/TemplateLayout/Header";
import HeaderContext from "../utils/helpers/context/header";
import Sidebar from "../components/TemplateLayout/Sidebar";

const { Content } = Layout;
const { useBreakpoint } = Grid;

const useStyles = makeStyles({
  main: {
    display: "flex",
    width: "100%",
  },
  header: {
    position: "fixed",
    width: "100%",
    zIndex: "1100",
  },
  sidebar: {
    width: "200px",
    minHeight: "100vh",
  },
  content: {
    position: "fixed",
    width: "1150px",
    minHeight: "100vh",
    marginLeft: "200px",
  },
});

const Container = ({ children }) => {
  const classes = useStyles();
  const history = useHistory();
  const [isRefreshed, setIsRefreshed] = useState(false);
  const [openSideBar, setOpenSideBar] = useState(false);
  const screens = useBreakpoint();

  const onRefresh = () => {
    setIsRefreshed(!isRefreshed);
  };

  return (
    <HeaderContext.Provider
      value={{
        isRefreshed,
      }}
    >
      <Layout
        style={{
          minHeight: "100vh",
          // background: "#fff",
          // backgroundColor: "#F9FAFF",
          fontFamily: "FuturaBkBT",
          width: "100%",
        }}
      >
        <Content>
          <div className={classes.main}>
            <div className={classes.header}>
              <Header />
            </div>
            <div className={classes.sidebar}>
              <Sidebar />
              <div className={classes.content}>{children}</div>
            </div>
          </div>
        </Content>
      </Layout>
    </HeaderContext.Provider>
  );
};

export default Container;
