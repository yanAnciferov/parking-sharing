import React from 'react';
import connect from "react-redux/es/connect/connect";
import {getPlaces} from "../../../action/location";
import PlacesView from "../common/places-view";
import PageHeader from "../../common/head-of-page";

class Places extends React.Component {

    componentWillMount(){
        this.props.startPlaces(this.props.idLocation);
    }

    render() {
        let { places, selectedLocation } = this.props.location;
        let forRender = places ? <PlacesView places={places}/> : null;
        let header = selectedLocation ? selectedLocation.name : "Loading...";
        return(
            <div className="locations-wrapper">
                <PageHeader>{header}</PageHeader>
                {forRender}
            </div>
        );
    }
}


export default connect(
    state => ({
        location: state.location
    }),
    dispatch => ({
        startPlaces: (idLocation) => {
            dispatch(getPlaces(idLocation));
        }
    })
)(Places);