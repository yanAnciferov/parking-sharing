import {PLACE_ACTION} from "../constants/actions";

export const PLACE_ACTION_CREATORS = {
    setPlaceData(place){
        return {
            type: PLACE_ACTION.PLACE_SET_PLACE_DATA,
            place
        }
    }
};