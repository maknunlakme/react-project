import { combineReducers } from 'redux';
import LoginReducer from './LoginReducer';
import NavReducer from "./NavReducer";

export default combineReducers({
    LoginData: LoginReducer,
    navData: NavReducer
});
