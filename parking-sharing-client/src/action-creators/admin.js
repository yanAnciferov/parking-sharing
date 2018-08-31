import {ADMIN_ACTION} from "../constants/actions";

export const ADMIN_ACTION_CREATORS = {
    setListOfRequestsForTake(list) {
        return {
            type: ADMIN_ACTION.SET_LIST_OF_REQUESTS_FOR_TAKE,
            list
        }
    },

    deleteRequestForTaking(id) {
        return {
            type: ADMIN_ACTION.DELETE_REQUEST_FOR_TAKING,
            id
        }
    },

    setListOfRequestsForLeaving(list) {
        return {
            type: ADMIN_ACTION.SET_LIST_OF_REQUESTS_FOR_LEAVE,
            list
        }
    },

    deleteRequestForLeaving(id) {
        return {
            type: ADMIN_ACTION.DELETE_REQUEST_FOR_LEAVING,
            id
        }
    }
};