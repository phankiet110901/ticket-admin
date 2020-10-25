import { login } from "../../../services";
import { LOGIN_FAILED, LOGIN_SUCCESS, LOGIN_REQUEST } from "./../constant";

const actLogin = (dataLogin) => {
  return (dispatch) => {
    dispatch({
        type: LOGIN_REQUEST,
    });

    login(dataLogin)
      .then((res) => {
        dispatch({
          type: LOGIN_SUCCESS,
          payload: res.data,
        });
      })
      .catch(() => {
        dispatch({
            type: LOGIN_FAILED,
        });
      });
  };
};

export { actLogin };
