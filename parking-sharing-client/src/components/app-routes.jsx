import React, { Component } from 'react';
import { Route, Redirect, Switch } from "react-router-dom"

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {PATHS} from "../constants/paths";
import Login from "./auth/pages/login";
import Auth from "./auth";


class AppRoutes extends Component {

    render() {
        let { isAuthorize } = this.props.app;
        return (
            <Switch>
                <Route exact path="/" render={() => (
                    isAuthorize ? (<Redirect to={PATHS.LOGIN + PATHS.AUTH}/>) : (<Redirect to={PATHS.LOGIN}/>)
                )}/>
                <Route path={PATHS.LOGIN} render={() => (
                    isAuthorize ? (<Redirect to={PATHS.AUTH + PATHS.MAIN}/>) : (<Login/>)
                )}/>
                <Route path={"/*"} render={() => (
                    isAuthorize ? (<Auth/>) : (<Redirect to={PATHS.LOGIN}/>)
                )}/>
            </Switch>);
    }
}


export default withRouter(connect(
    state => ({
        app: state.app
    })
)(AppRoutes))