export function setListOfRequestForTake(state, action) {
    return {
        ...state,
        requestForTake: action.list
    }
}

export function deleteRequestForTaking(state, action) {
    let { requestForTake } = state;
    let index = requestForTake.findIndex((item) => {
        return item._id === action.id;
    });
    requestForTake.splice(index, 1);
    return {
        ...state,
        requestForTake
    }
}

export function setListOfRequestForLeave(state, action) {
    return {
        ...state,
        requestForLeave: action.list
    }
}


export function deleteRequestForLeaving(state, action) {
    let { requestForLeave } = state;
    let index = requestForLeave.findIndex((item) => {
        return item._id === action.id;
    });
    requestForLeave.splice(index, 1);
    return {
        ...state,
        requestForLeave
    }
}
