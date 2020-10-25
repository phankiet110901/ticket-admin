import { combineReducers } from "redux";
import { loginReducer } from "./../../pages/login/modules";



const rootReducer = combineReducers({
    login: loginReducer
});


export default rootReducer;