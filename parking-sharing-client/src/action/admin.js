import axios from "axios";
import {
    ACCEPT_REQUESTS_FOR_LEAVING,
    ACCEPT_REQUESTS_FOR_TAKING,
    GET_REQUESTS_FOR_LEAVING,
    GET_REQUESTS_FOR_TAKING, REJECT_REQUESTS_FOR_LEAVING,
    REJECT_REQUESTS_FOR_TAKING
} from "../constants/apiUrl";
import {ADMIN_ACTION_CREATORS} from "../action-creators/admin";


export const getRequestsForTaking = () => (dispatch, getState) => {
    const { isAuthorize } = getState().app;
    if(!isAuthorize) return;

    axios.get(GET_REQUESTS_FOR_TAKING)
        .then((res) => {
            dispatch(ADMIN_ACTION_CREATORS.setListOfRequestsForTake(res.data));
        })
        .catch((err) => {
            console.log(err);
            //getAuthUserDataError(err, dispatch);
        })
};

export const getRequestsForLeaving = () => (dispatch, getState) => {
    const { isAuthorize } = getState().app;
    if(!isAuthorize) return;

    axios.get(GET_REQUESTS_FOR_LEAVING)
        .then((res) => {
            dispatch(ADMIN_ACTION_CREATORS.setListOfRequestsForLeaving(res.data));
        })
        .catch((err) => {
            console.log(err);
            //getAuthUserDataError(err, dispatch);
        })
};


export const acceptRequestForLeaving = (id, loading) => (dispatch, getState) => {
    const { isAuthorize } = getState().app;
    if(!isAuthorize)
        return;
    loading(true);
    axios.post(ACCEPT_REQUESTS_FOR_LEAVING, { id })
        .then((res) => {
            console.log(res.status);
            loading(false, true);
        })
        .catch((err) => {
            console.log(err);
            loading(false, false);
        })
};

export const acceptRequestForTaking = (id, loading) => (dispatch, getState) => {
    const { isAuthorize } = getState().app;
    if(!isAuthorize)
        return;
    loading(true);
    axios.post(ACCEPT_REQUESTS_FOR_TAKING, { id })
        .then((res) => {
            console.log(res.status);
            loading(false, true);
        })
        .catch((err) => {
            console.log(err);
            loading(false, false);
        })
};


export const rejectRequestForLeaving = (id, loading) => (dispatch, getState) => {
    const { isAuthorize } = getState().app;
    if(!isAuthorize)
        return;
    loading(true);
    axios.post(REJECT_REQUESTS_FOR_LEAVING, { id })
        .then((res) => {
            console.log(res.status);
            loading(false, true);
        })
        .catch((err) => {
            console.log(err);
            loading(false, false);
        })
};

export const rejectRequestForTaking = (id, loading) => (dispatch, getState) => {
    const { isAuthorize } = getState().app;
    if(!isAuthorize)
        return;
    loading(true);
    axios.post(REJECT_REQUESTS_FOR_TAKING, { id })
        .then((res) => {
            console.log(res.status);
            loading(false, true);
        })
        .catch((err) => {
            console.log(err);
            loading(false, false);
        })
};