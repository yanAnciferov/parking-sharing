import {LOGIN_ACTION} from "../../constants/actions";
import {loginChangeHandler, loginError, loginSubmit} from "./loginHandlers";



export function getInitialState(){
    return {
        username: '',
        password: '',
        isValid: false,
        loginErrorView: false,
        validateState: {
            username: { isValid: true, messages: [] },
            password: { isValid: true, messages: [] }
        }
    }
}

export default function (state = getInitialState(), action) {
    switch (action.type) {
        case LOGIN_ACTION.LOGIN_FIELD_CHANGE : return loginChangeHandler(state, action);
        case LOGIN_ACTION.LOGIN_SUBMIT : return loginSubmit(state, action);
        case LOGIN_ACTION.LOGIN_ERROR : return loginError(state, action);
        default: return state;
    }
}


