import { pathNameCONFIG } from "../../../config";
export const SET_LOADING = "login/SET_LOADING";
// export const SET_CURRENT_USER = "login/SET_CURRENT_USER";

export const setLoading = (payload) => ({
  type: SET_LOADING,
  payload,
});

// export const setCurrentUser = (payload) => ({
//   type: SET_CURRENT_USER,
//   payload,
// });

export const handleSubmitLogin = (body, history) => async (dispatch) => {
  console.log(body);
  console.log(history);
  console.log("login here");
  history.push(pathNameCONFIG.DASHBOARD);
};
