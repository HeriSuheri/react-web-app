import React, { useState } from "react";
import { useHistory } from "react-router-dom";

// libraries
import { Layout, Grid } from "antd";

// components
// import SideBar from "components/BN/TemplateLayout/SideBar";
// import Header from "components/BN/TemplateLayout/Header";
// import IdleTimerContainer from "components/BN/IdleContainerTimer";
import Header from "../components/TemplateLayout/Header";
import HeaderContext from "../utils/helpers/context/header";
import Sidebar from "../components/TemplateLayout/Sidebar";
// import Navbar from "../components/Navbar";

const { Content } = Layout;
const { useBreakpoint } = Grid;

const Container = ({ children }) => {
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
          // minHeight: "100vh",
          height: "100%",
          background: "#fff",
          fontFamily: "FuturaBkBT",
        }}
      >
        <div
          style={{ paddingLeft: "10px", paddingTop: "10px", width: "350px" }}
        >
          <Sidebar />
        </div>
        <Layout style={{ backgroundColor: "#F9FAFF" }}>
          <Content
            style={{
              height: "100%",
            }}
          >
            {/* <Header
              onRefresh={onRefresh}
              handleOpenSidebar={handleOpenSidebar}
            /> */}
            <Header />
            {children}
            {/* <IdleTimerContainer /> */}
          </Content>
        </Layout>
      </Layout>
    </HeaderContext.Provider>
  );
};

export default Container;
