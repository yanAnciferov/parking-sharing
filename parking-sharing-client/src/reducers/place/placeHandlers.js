export function setPlaceData(state, action) {
    console.log(action);
    return {
        ...state,
        place: action.place
    }
}