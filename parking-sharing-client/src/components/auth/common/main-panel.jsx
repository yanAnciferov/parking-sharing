import React from 'react';
import AuthRoutes from "./auth-routes";
import AdminRoutes from "../../admin/common/admin-routes";
import {connect} from "react-redux";
import {Redirect, withRouter} from "react-router";
import {Route, Switch} from "react-router-dom";
import {PATHS} from "../../../constants/paths";

class MainPanel extends React.Component {


    render() {
        return (
            <div className="main-wrapper">
                <div className="main-paper">
                    <Switch>
                        <Route path={PATHS.AUTH + "/*"} render={() => (
                            <AuthRoutes/>
                        )}/>
                        <Route path={"/admin/*"} render={() => (
                            <AdminRoutes/>
                        )}/>
                        <Route path={"/*"} render={() => (
                            <Redirect to={PATHS.AUTH + PATHS.MAIN} />
                        )}/>
                    </Switch>
                </div>
            </div>
        );
    }
}

export default withRouter(connect(
    state => ({
        app: state.app
    })
)(MainPanel));
