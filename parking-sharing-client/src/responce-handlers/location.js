import {LOCATION_ACTION_CREATORS} from "../action-creators/location";
import {PLACE_ACTION_CREATORS} from "../action-creators/place";
import {CALENDAR_ACTION_CREATORS} from "../action-creators/calendar";

export function getCitiesSuccess(res, dispatch) {
    dispatch(LOCATION_ACTION_CREATORS.setCities(res.data));
}

export function getCitiesError(err, dispatch) {
    console.log(err);
}

export function getLocationsSuccess(res, dispatch) {
    dispatch(LOCATION_ACTION_CREATORS.setLocations(res.data.locations));
    dispatch(LOCATION_ACTION_CREATORS.setSelectedCity(res.data));
}

export function getLocationsError(err, dispatch) {
    console.log(err);
}

export function getPlacesSuccess(res, dispatch) {
    dispatch(LOCATION_ACTION_CREATORS.setPlaces(res.data.places));
    dispatch(LOCATION_ACTION_CREATORS.setSelectedLocation(res.data));
}

export function getPlacesError(err, dispatch) {
    console.log(err);
}

export function getMyPlaceSuccess(res, dispatch) {
    dispatch(PLACE_ACTION_CREATORS.setPlaceData(res.data));
    let { borrow, free } = res.data;
    if(Array.isArray(borrow) && borrow.length)
        dispatch(CALENDAR_ACTION_CREATORS.setBorrow(res.data.borrow));
    if(Array.isArray(free) && free.length)
        dispatch(CALENDAR_ACTION_CREATORS.setFree(res.data.free));
}

export function getMyPlaceError(err, dispatch) {
    console.log(err);
}