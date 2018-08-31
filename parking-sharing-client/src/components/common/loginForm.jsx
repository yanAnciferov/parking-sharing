import React from 'react';
import {Alert, Button, Form, FormFeedback, FormGroup, Input, Label} from "reactstrap";
import {CONTENT} from "../../content/index";
import {LOGIN_FIELDS} from "../../constants/modelFields";

class LoginForm extends React.Component {



    render() {
        const { onSubmit, onFieldChange, password, username, validateState, loginErrorView } = this.props;
        let incorrectAlert = loginErrorView ? <Alert color="danger">Incorrect username or password</Alert> : null;
        return (
            <Form onSubmit={onSubmit} method="post">
                <FormGroup>
                    <Label className="text-muted" for="username">{CONTENT.USERNAME}</Label>
                    <Input
                        value={username}
                        type="text"
                        onChange={(e)=>{onFieldChange(e.target.value, LOGIN_FIELDS.USERNAME )}}
                        name="username"
                        invalid={!validateState.username.isValid || loginErrorView}
                    />
                    <FormFeedback>{validateState.username.messages}</FormFeedback>
                </FormGroup>
                <FormGroup>
                    <Label className="text-muted" for="password">{CONTENT.PASSWORD}</Label>
                    <Input
                        value={password}
                        onChange={(e)=>{onFieldChange(e.target.value, LOGIN_FIELDS.PASSWORD )}}
                        type="password"
                        name="password"
                        invalid={!validateState.password.isValid || loginErrorView}
                    />
                    <FormFeedback>{validateState.password.messages}</FormFeedback>
                </FormGroup>
                {incorrectAlert}
                <Button type="submit" color="success" className="text-uppercase">{CONTENT.LOG_IN}</Button>
            </Form>
        );
    }
}


export default LoginForm;