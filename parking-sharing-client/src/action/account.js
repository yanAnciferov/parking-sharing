import axios from "axios"
import {LOGIN, GET_AUTH_USER_DATA, GET_MY_PLACE} from "../constants/apiUrl";
import {getAuthUserDataError, getAuthUserDataSuccess, loginError, loginSuccess} from "../responce-handlers/account";
import {getMyPlaceError, getMyPlaceSuccess} from "../responce-handlers/location";


export const loginLDAP = () => (dispatch, getState) => {
    const { username, password, isValid } = getState().login;
    if(isValid === false)
        return;


    axios.post("http://localhost:3002" + LOGIN,{username: username.trim(), password})
        .then((res) => {
            loginSuccess(res, dispatch);
        })
        .catch((err) => {
            loginError(err, dispatch);
        })
};

export const login = () => (dispatch, getState) => {
    axios.post("http://localhost:3001" + LOGIN)
        .then((res) => {
            console.log(res.status);
        })
        .catch((err) => {
            console.log(err);
        })
};

export const getAuthUserData = () => (dispatch, getState) => {
    const { isAuthorize } = getState().app;
    if(!isAuthorize)
        return;
    axios.get(GET_AUTH_USER_DATA)
        .then((res) => {
            getAuthUserDataSuccess(res, dispatch)
        })
        .catch((err) => {
            getAuthUserDataError(err, dispatch);
        })
};


export const getMyPlace = () => (dispatch, getState) => {
    const { isAuthorize } = getState().app;
    if(!isAuthorize)
        return;

    axios.get(GET_MY_PLACE)
        .then((res) => {
            getMyPlaceSuccess(res, dispatch);
        })
        .catch((err) => {
            getMyPlaceError(err, dispatch);
        })
};