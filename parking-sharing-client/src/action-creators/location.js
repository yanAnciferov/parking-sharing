import {LOCATION_ACTION} from "../constants/actions";

export const LOCATION_ACTION_CREATORS = {
    setCities(cities){
        return {
            type: LOCATION_ACTION.LOCATION_SET_CITIES,
            cities
        }
    },

    setLocations(locations){
        return {
            type: LOCATION_ACTION.LOCATION_SET_LOCATIONS,
            locations
        }
    },

    setPlaces(places){
        return {
            type: LOCATION_ACTION.LOCATION_SET_PLACES,
            places
        }
    },

    setSelectedPlace(place){
        return {
            type: LOCATION_ACTION.LOCATION_SET_SELECTED_PLACE,
            place
        }
    },

    setSelectedCity(city){
        return {
            type: LOCATION_ACTION.LOCATION_SET_SELECTED_CITY,
            city
        }
    },

    setSelectedLocation(location){
        return {
            type: LOCATION_ACTION.LOCATION_SET_SELECTED_LOCATION,
            location
        }
    },

    updatePlaceState(idPlace, newState) {
        return {
            type: LOCATION_ACTION.UPDATE_PLACE_STATE,
            newState,
            idPlace
        }
    }
};
