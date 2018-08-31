import {ADMIN_ACTION} from "../../constants/actions";
import {
    deleteRequestForLeaving,
    deleteRequestForTaking,
    setListOfRequestForLeave,
    setListOfRequestForTake
} from "./adminHandlers";


function getInitialState(){
    return {
        requestForTake: [],
        requestForLeave: []
    }
}


export default function (state = getInitialState(), action) {
    switch (action.type) {
        case ADMIN_ACTION.SET_LIST_OF_REQUESTS_FOR_TAKE: return setListOfRequestForTake(state, action);
        case ADMIN_ACTION.DELETE_REQUEST_FOR_TAKING: return deleteRequestForTaking(state, action);
        case ADMIN_ACTION.SET_LIST_OF_REQUESTS_FOR_LEAVE: return setListOfRequestForLeave(state, action);
        case ADMIN_ACTION.DELETE_REQUEST_FOR_LEAVING: return deleteRequestForLeaving(state, action);
        default: return state;
    }
}