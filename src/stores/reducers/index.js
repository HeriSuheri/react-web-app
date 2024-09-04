import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import login from "./login";
// import dashboard from "./dashboard";
// import menus from "./menus";
// import generalParameter from "./generalParameter";
// import errorGeneral from "./errorGeneral";

// export default (history) =>
//   combineReducers({
//     router: connectRouter(history),
//     login,
//   });

const rootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    login,
  });

export default rootReducer;


