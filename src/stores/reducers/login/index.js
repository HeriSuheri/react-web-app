import { SET_LOADING } from "../../actions/login";
// import { SET_CURRENT_USER } from "../../actions/login";

const initialState = {
  isLoading: false,
  // currentUser: null,
};

const reducerLogin = (state = initialState, { payload, type }) => {
  switch (type) {
    case SET_LOADING:
      return {
        ...state,
        isLoading: payload,
      };
    // case SET_CURRENT_USER:
    //   return {
    //     ...state,
    //     currentUser: payload,
    //   };
    default:
      return state;
  }
};

export default reducerLogin;
