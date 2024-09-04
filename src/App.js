import React, { useState, useEffect, createContext } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import { pathNameCONFIG } from "./config";
import PrivateRoute from "./config/PrivateRoute";

import ContainerBN from "./layout";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Registrasi from "./pages/Registrasi";
import ForgotPassword from "./pages/ForgotPassword";
import { getLocalStorage } from "./utils/helpers";

export const RootContext = createContext();

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userLogin = getLocalStorage("user");
    if (userLogin) {
      setUser(userLogin);
    }
  }, []);

  return (
    <RootContext.Provider value={{ user }}>
      <Switch>
        {/* <ContainerBN> */}
        <Route exact path={pathNameCONFIG.ROOT_URL} component={Home} />
        <Route exact path={pathNameCONFIG.LOGIN} component={Login} />
        <Route exact path={pathNameCONFIG.REGISTRASI} component={Registrasi} />
        <Route
          exact
          path={pathNameCONFIG.FORGOT_PASSWORD}
          component={ForgotPassword}
        />

        <PrivateRoute>
          <Route exact path={pathNameCONFIG.DASHBOARD} component={Dashboard} />
        </PrivateRoute>

        {/* </ContainerBN> */}
      </Switch>
    </RootContext.Provider>
  );
};

export default App;
