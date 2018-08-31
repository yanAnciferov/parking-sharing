import {validateLoginForm} from "../../scripts/validation";

export function loginChangeHandler(state, action){
    let { field, value } = action;
    return {
        ...state,
        [field]: value,
        loginErrorView: false
    }
}

export function loginSubmit(state, action) {
    let validateState = validateLoginForm(state);
    let isValid = true;
    for (let vs in validateState) {
        if(!validateState[vs].isValid)
        {
            isValid = false;
            break;
        }
    }

    return {
        ...state,
        validateState,
        isValid
    }
}

export function loginError(state, action) {
    return {
        ...state,
        loginErrorView: true
    }
}