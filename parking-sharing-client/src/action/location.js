import axios from "axios";
import {GET_CITIES, GET_LOCATIONS, GET_PLACES} from "../constants/apiUrl";
import {
    getCitiesError,
    getCitiesSuccess,
    getLocationsError,
    getLocationsSuccess, getPlacesError,
    getPlacesSuccess
} from "../responce-handlers/location";

export const getCities = () => (dispatch, getState) => {
    const { isAuthorize } = getState().app;
    if(!isAuthorize)
        return;

    axios.get(GET_CITIES)
        .then((res) => {
            getCitiesSuccess(res, dispatch)
        })
        .catch((err) => {
            getCitiesError(err, dispatch);
        })
};


export const getLocations = (city) => (dispatch, getState) => {
    const { isAuthorize } = getState().app;
    if(!isAuthorize)
        return;


    axios.get(GET_LOCATIONS,  { params: { city } })
        .then((res) => {
            getLocationsSuccess(res, dispatch)
        })
        .catch((err) => {
            getLocationsError(err, dispatch);
        })
};


export const getPlaces = (location) => (dispatch, getState) => {
    const { isAuthorize } = getState().app;
    if(!isAuthorize)
        return;


    axios.get(GET_PLACES,  { params: { idLocation: location } })
        .then((res) => {
            getPlacesSuccess(res, dispatch)
        })
        .catch((err) => {
            getPlacesError(err, dispatch);
        })
};