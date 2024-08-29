import "./App.css";
import {
  Redirect,
  Route,
  Switch,
  useHistory,
  useLocation,
} from "react-router-dom";

import { pathNameCONFIG } from "./config";
import ContainerBN from "./layout";

import Login from "./pages/Login";
import Home from "./pages/Home";

const App = () => {
  return (
    <Switch>
      {/* <ContainerBN> */}
        <Route exact path={pathNameCONFIG.ROOT_URL} component={Home} />
        <Route exact path={pathNameCONFIG.LOGIN} component={Login} />
      {/* </ContainerBN> */}
    </Switch>
  );
};

export default App;
