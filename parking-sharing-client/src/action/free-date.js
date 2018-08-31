import axios from "axios";
import {CALENDAR_ACTION_CREATORS} from "../action-creators/calendar";

export const addFreeDate = (idPlace, date) => (dispatch, getState) => {
    const { isAuthorize } = getState().app;
    if(!isAuthorize)
        return;
    //loading(true);
    axios.post("/api/free-date/add", { idPlace, date })
        .then((res) => {
            console.log(res.data);
            dispatch(CALENDAR_ACTION_CREATORS.setFree(res.data.free));
            dispatch(CALENDAR_ACTION_CREATORS.setBorrow(res.data.borrow));
            dispatch(CALENDAR_ACTION_CREATORS.setSimple(res.data.simple));

        })
        .catch((err) => {
            console.log(err);
        })
};


export const rejectFreeDate = (idPlace, date) => (dispatch, getState) => {
    const { isAuthorize } = getState().app;
    if(!isAuthorize)
        return;
    axios.post("/api/free-date/reject", { idPlace, date })
        .then((res) => {
            console.log(res.data);
            dispatch(CALENDAR_ACTION_CREATORS.setFree(res.data.free));
            dispatch(CALENDAR_ACTION_CREATORS.setBorrow(res.data.borrow));
            dispatch(CALENDAR_ACTION_CREATORS.setSimple(res.data.simple));

        })
        .catch((err) => {
            console.log(err);
        })
};