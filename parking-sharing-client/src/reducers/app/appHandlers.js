import {updateAxiosHeaderAuthorization} from "../../axios";

export function SetToken(state, action) {
    updateAxiosHeaderAuthorization(action.token);
    localStorage.setItem("token", action.token);
    return {
        ...state,
        token: action.token,
        isAuthorize: true
    }
}

export function Logout(state, action) {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    return {
        ...state,
        token: null,
        isAuthorize: false,
        user: null
    }
}

export function SetUserData(state, action) {
    localStorage.setItem("user", JSON.stringify(action.user));
    return {
        ...state,
        user: action.user
    }
}