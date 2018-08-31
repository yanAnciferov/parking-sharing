export function setCity(state, action) {
    return {
        ...state,
        cities: action.cities
    }
}


export function setLocations(state, action) {
    return {
        ...state,
        locations: action.locations
    }
}

export function setPlaces(state,action) {
    return {
        ...state,
        places: action.places
    }
}


export function setSelectedCity(state,action) {
    return {
        ...state,
        selectedCity: action.city
    }
}


export function setSelectedLocation(state,action) {
    return {
        ...state,
        selectedLocation: action.location
    }
}


export function setSelectedPlace(state,action) {
    return {
        ...state,
        selectedPlace: action.place
    }
}

export function updatePlaceState(state, action) {
    let selectedPlace = state.selectedPlace;
    if(selectedPlace){
        selectedPlace.state = action.newState;
    }

    let places = state.places;
    if(places){
        let index = places.findIndex((place) => { return place._id === action.idPlace; });
        places[index].state = action.newState;
    }

    return {
        ...state,
        selectedPlace,
        places
    }
}
