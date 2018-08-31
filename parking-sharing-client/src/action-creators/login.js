import {LOGIN_ACTION} from "../constants/actions";

export const LOGIN_ACTION_CREATORS = {
    loginChangeField(value, field){
        return {
            type: LOGIN_ACTION.LOGIN_FIELD_CHANGE,
            value,
            field
        }
    },

    loginSubmit(){
        return {
            type: LOGIN_ACTION.LOGIN_SUBMIT
        }
    },

    setToken(token){
        return{
            type: LOGIN_ACTION.LOGIN_SET_TOKEN,
            token
        }
    },

    setUserData(user){
        return{
            type: LOGIN_ACTION.LOGIN_SET_USER_DATA,
            user: user
        }
    },

    logout(){
        return{
            type: LOGIN_ACTION.LOGOUT
        }
    },

    loginError(){
        return {
            type: LOGIN_ACTION.LOGIN_ERROR
        }
    }
};