import React, { useState, useEffect, createContext } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";
import "./App.css";
import { Route, Switch , useLocation} from "react-router-dom";
import { pathNameCONFIG } from "./config";
import PrivateRoute from "./config/PrivateRoute";

import ContainerBN from "./layout";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Registrasi from "./pages/Registrasi";
import ForgotPassword from "./pages/ForgotPassword";
import { getLocalStorage } from "./utils/helpers";

import theme from "./assets/theme/theme";

export const RootContext = createContext();

const App = () => {
  const location = useLocation();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userLogin = getLocalStorage("user");
    if (userLogin) {
      setUser(userLogin);
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <RootContext.Provider value={{ user }}>
        <Switch>
          <Route exact path={pathNameCONFIG.ROOT_URL} component={Home} />
          <Route exact path={pathNameCONFIG.LOGIN} component={Login} />
          <Route
            exact
            path={pathNameCONFIG.REGISTRASI}
            component={Registrasi}
          />
          <Route
            exact
            path={pathNameCONFIG.FORGOT_PASSWORD}
            component={ForgotPassword}
          />

          <PrivateRoute>
            <ContainerBN>
              <Route
                exact
                path={pathNameCONFIG.DASHBOARD}
                component={Dashboard}
              />
            </ContainerBN>
          </PrivateRoute>
        </Switch>
      </RootContext.Provider>
    </ThemeProvider>
  );
};

export default App;
