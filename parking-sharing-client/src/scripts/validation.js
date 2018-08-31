import {VALIDATE_ERRORS} from "../content/errors";
import validate from "validate.js";

export function validateLoginForm(data){
    let password =  validatePassword(data);
    let username =  validateUsername(data);
    return {
        password: {
            isValid: !password,
            messages: password || []
        },
        username: {
            isValid: !username,
            messages: username || []
        }
    }
}


function validateUsername(data) {
    let constraints = {
        username: {
            presence: true,
            length: {
                minimum: 1,
                message: VALIDATE_ERRORS.FIELD_MUST_BE_FILL
            }
        }
    }
    return validate(data, constraints, {format: "flat"});
}

function validatePassword(data) {
    let constraints = {
        password: {
            presence: true,
            length: {
                minimum: 1,
                message: VALIDATE_ERRORS.FIELD_MUST_BE_FILL
            }
        }
    }

    return validate(data, constraints, {format: "flat"});
}