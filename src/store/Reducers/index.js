import { combineReducers } from 'redux';
import LoginReducer from './LoginReducer';
import NavReducer from "./NavReducer";
import SalesReducer from "./SalesReducer";

export default combineReducers({
    LoginData: LoginReducer,
    navData: NavReducer,
    salesData: SalesReducer
});
