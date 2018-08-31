import React, { Component } from 'react';
import {Redirect, Route, Switch} from "react-router-dom"
import { withRouter } from 'react-router-dom';
import {PATHS} from "../../../constants/paths";
import Locations from "../pages/locations";
import {connect} from "react-redux";
import Places from "../pages/places";
import FreePlaces from "../pages/free-places";
import MyPlace from "../pages/myPlace";


class AuthRoutes extends Component {

    render() {
        let { selectedCity } = this.props.location;
        let forRedirectMain = selectedCity ? <Redirect to={`/auth/city/${selectedCity.name}`} />  : "loading";
        return (
            <Switch>
                <Route exact path={PATHS.AUTH} render={() => (<Redirect to={PATHS.AUTH + PATHS.MAIN}/>)} />
                <Route path={PATHS.CITY} render={({ match:pathlessMatch }) => (<Locations city={pathlessMatch.params.city}/>)}/>
                <Route path={PATHS.LOCATION} render={({ match:pathlessMatch }) => (<Places idLocation={pathlessMatch.params.idLocation}/>)}/>
                <Route path={PATHS.FREE_PLACES} render={() => (<FreePlaces/>)}/>
                <Route path={PATHS.MY_PLACE} render={() => (<MyPlace/>)}/>
                <Route path={PATHS.AUTH + PATHS.MAIN} render={() => (forRedirectMain)} />
                <Route render={() => (<Redirect to={PATHS.AUTH + PATHS.MAIN}/>)} />
            </Switch>
        )
    }
}


export default withRouter(connect( state => ({
    app: state.app,
    catcher: state.catcher,
    location: state.location
}))(AuthRoutes))