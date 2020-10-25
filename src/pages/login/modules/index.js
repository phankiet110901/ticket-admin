import { LOGIN_FAILED, LOGIN_SUCCESS, LOGIN_REQUEST } from "./../constant";

let initialState = {
  isLoading: false,
  isShowErr: false,
  isShowErrNotAdmin: false,
  userLogin: undefined,
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST: {
      return { ...state, isLoading: true };
    }

    case LOGIN_SUCCESS: {
      let stateUpdate = { ...state };
      stateUpdate.isLoading = false;
      // check is admin or not to show err
      if(action.payload.maLoaiNguoiDung === "QuanTri") {
        stateUpdate.userLogin = action.payload;
        stateUpdate.isShowErrNotAdmin = false;
      }
      else {
        stateUpdate.isShowErrNotAdmin = true;
      }

      stateUpdate.isShowErr = false;
      state = { ...stateUpdate };
      return { ...state };
    }

    case LOGIN_FAILED: {
      return { ...state, isLoading: false, isShowErr: true, isShowErrNotAdmin: false};
    }

    default: {
      return { ...state };
    }
  }
};

export { loginReducer };
