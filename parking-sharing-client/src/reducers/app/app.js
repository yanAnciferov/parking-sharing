import {updateAxiosHeaderAuthorization} from "../../axios";
import {LOGIN_ACTION} from "../../constants/actions";
import {SetToken, Logout, SetUserData} from "./appHandlers";



function getInitialState(){
    let token = localStorage.getItem("token");
    let jsonUser = localStorage.getItem("user");
    let user = jsonUser ? JSON.parse(jsonUser) : null;
    updateAxiosHeaderAuthorization(token);
    return {
        isAuthorize: !!token,
        token,
        user
    }
}


export default function (state = getInitialState(), action) {
    switch (action.type) {
        case LOGIN_ACTION.LOGIN_SET_TOKEN: return SetToken(state, action);
        case LOGIN_ACTION.LOGIN_SET_USER_DATA: return SetUserData(state, action);
        case LOGIN_ACTION.LOGOUT: return Logout(state, action);
        default: return state;
    }
}