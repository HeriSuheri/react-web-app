import { Route, Redirect } from "react-router-dom";
import { getLocalStorage } from "../utils/helpers";

const PrivateRoute = ({ children, ...rest }) => {
  const isAuthenticated = () => {
    const lsData = getLocalStorage("user");
    return lsData;
  };

  return (
    <Route
      {...rest}
      render={(props) => (!isAuthenticated() ? <Redirect to="/" /> : children)}
    />
  );
};

export default PrivateRoute;
