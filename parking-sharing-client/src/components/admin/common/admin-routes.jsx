import React, { Component } from 'react';
import { Route, Redirect, Switch } from "react-router-dom";
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import RequestsForTaking from "../pages/requests-for-taking"
import RequestsForLeaving from "../pages/requests-for-leaving";

class AdminRoutes extends Component {

    render() {
        let { user } = this.props.app;
        return (
            <Switch>
                <Route exact path={"/admin"} render={() => (<Redirect to={"/admin/main"} from={"/admin"}/>)} />
                <Route exact path={"/admin/*"} render={() => (
                    (user && user.isAdmin ? <AdminPathes/> : <Redirect to={"/auth/main"} from={"/admin/*"}/>))} />
            </Switch>

        )
    }
}

const AdminPathes = withRouter(() => {
    return (
        <Switch>
            <Route path={"/admin/main"} render={() => (<div>Main</div>)}/>
            <Route path={"/admin/requests-for-taking"} render={() => (<RequestsForTaking/>)}/>
            <Route path={"/admin/requests-for-leaving"} render={() => (<RequestsForLeaving/>)}/>
            <Route render={() => (<Redirect to={"/admin/main"} />)}/>
        </Switch>

    )
});

export default withRouter(connect(
    state => ({
        app: state.app
    })
)(AdminRoutes))