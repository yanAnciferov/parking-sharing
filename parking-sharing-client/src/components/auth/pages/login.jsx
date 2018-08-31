import React from 'react';
import LoginForm from "../../common/loginForm";
import {connect} from "react-redux";
import {LOGIN_ACTION_CREATORS} from "../../../action-creators/login";
import {loginLDAP} from "../../../action/account";

class Login extends React.Component {
    render() {
        return (
            <div className="login-wrapper">
                <div className="login-form-wrapper">
                    <div className="logo">
                        <img src="./../logo.png" alt="logo"/>
                    </div>
                   <LoginForm {...this.props} {...this.props.login} />
                </div>
            </div>
        );
    }
}


export default connect(
        state => ({
            login: state.login
        }),
        dispatch => ({
            onFieldChange: (value, type)=>{
                dispatch(LOGIN_ACTION_CREATORS.loginChangeField(value, type));
            },
            onSubmit: (e) => {
                e.preventDefault();
                dispatch(LOGIN_ACTION_CREATORS.loginSubmit());
                dispatch(loginLDAP());
            }
        }))(Login);