import axios from "axios";
import {REJECT_PLACE, TAKE_PLACE, LEAVE_PLACE, CANCEL_LEAVING_PLACE} from "../constants/apiUrl";
import {PLACE_BUTTON_STATES} from "../constants/common";
import {LOCATION_ACTION_CREATORS} from "../action-creators/location";

export const requestForTakePlace = (idPlace, loading) => (dispatch, getState) => {
    const state = getState();
    if (!state.app.user && !state.app.user.username) return;
    let username = getState().app.user.username;
    loading(true);
    axios.post("http://localhost:3001" + TAKE_PLACE, {username, idPlace})
        .then((res) => {
            console.log(res.status);
            loading(false);
            dispatch(LOCATION_ACTION_CREATORS.updatePlaceState(idPlace, PLACE_BUTTON_STATES.REQUESTING));
        })
        .catch((err) => {
            console.log(err);
            loading(false);
        });
};

export const requestForRejectPlace = (idPlace, loading) => (dispatch, getState) => {
    const state = getState();
    if (!state.app.user && !state.app.user.username) return;
    let username = getState().app.user.username;
    loading(true);
    axios.post("http://localhost:3001" + REJECT_PLACE, {username, idPlace})
        .then((res) => {
            console.log(res.status);
            loading(false);
            dispatch(LOCATION_ACTION_CREATORS.updatePlaceState(idPlace, PLACE_BUTTON_STATES.FREE));
        })
        .catch((err) => {
            console.log(err);
            loading(false);
        });
};

export const requestForLeavePlace = (idPlace, loading) => (dispatch, getState) => {
    const state = getState();
    if (!state.app.user && !state.app.user.username) return;
    let username = getState().app.user.username;
    loading(true);
    axios.post("http://localhost:3001" + LEAVE_PLACE, {username, idPlace})
        .then((res) => {
            console.log(res.status);
            loading(false);
            dispatch(LOCATION_ACTION_CREATORS.updatePlaceState(idPlace, PLACE_BUTTON_STATES.LEAVING));
        })
        .catch((err) => {
            console.log(err);
            loading(false);
        });
};

export const requestForCancelLeavePlace = (idPlace, loading) => (dispatch, getState) => {
    const state = getState();
    if (!state.app.user && !state.app.user.username) return;
    let username = getState().app.user.username;
    loading(true);
    axios.post("http://localhost:3001" + CANCEL_LEAVING_PLACE, {username, idPlace})
        .then((res) => {
            console.log(res.status);
            loading(false);
            dispatch(LOCATION_ACTION_CREATORS.updatePlaceState(idPlace, PLACE_BUTTON_STATES.TAKEN));
        })
        .catch((err) => {
            console.log(err);
            loading(false);
        });
};

