import {LOGIN_ACTION_CREATORS} from "../action-creators/login";
import {login} from "../action/account";
import {LOCATION_ACTION_CREATORS} from "../action-creators/location";

export function loginSuccess(res, dispatch) {
    dispatch(LOGIN_ACTION_CREATORS.setToken(res.data.token));
    dispatch(LOGIN_ACTION_CREATORS.setUserData(res.data.user));
    dispatch(login());
}

export function loginError(err, dispatch) {
    dispatch(LOGIN_ACTION_CREATORS.loginError());
}


export function getAuthUserDataSuccess(res, dispatch) {
    dispatch(LOGIN_ACTION_CREATORS.setUserData(res.data));
    dispatch(LOCATION_ACTION_CREATORS.setSelectedCity(res.data.city));
}

export function getAuthUserDataError(err, dispatch) {
    dispatch(LOGIN_ACTION_CREATORS.logout())
}
