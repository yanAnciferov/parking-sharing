import {PLACE_ACTION} from "../../constants/actions";
import {setPlaceData} from "./placeHandlers";

export function getInitialState(){
    return {
        place: null
    }
}

export default function (state = getInitialState(), action) {
    switch (action.type) {
        case PLACE_ACTION.PLACE_SET_PLACE_DATA: return setPlaceData(state, action);
        default: return state;
    }
}


