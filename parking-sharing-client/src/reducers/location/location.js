import { LOCATION_ACTION } from "../../constants/actions";
import {
    setCity,
    setLocations,
    setPlaces,
    setSelectedCity,
    setSelectedLocation,
    setSelectedPlace, updatePlaceState
} from "./locationsHandlers";



function getInitialState(){
    return {
        cities: null,
        selectedCity: null,
        locations: null,
        selectedLocation: null,
        places: null,
        selectedPlace: null
    }
}

export default function (state = getInitialState(), action) {
    switch (action.type) {
        case LOCATION_ACTION.LOCATION_SET_CITIES : return setCity(state, action);
        case LOCATION_ACTION.LOCATION_SET_LOCATIONS : return setLocations(state, action);
        case LOCATION_ACTION.LOCATION_SET_PLACES : return setPlaces(state, action);
        case LOCATION_ACTION.LOCATION_SET_SELECTED_CITY : return setSelectedCity(state, action);
        case LOCATION_ACTION.LOCATION_SET_SELECTED_LOCATION : return setSelectedLocation(state, action);
        case LOCATION_ACTION.LOCATION_SET_SELECTED_PLACE : return setSelectedPlace(state, action);
        case LOCATION_ACTION.UPDATE_PLACE_STATE : return updatePlaceState(state, action);
        default: return state;
    }
}


