import React from 'react';
import connect from "react-redux/es/connect/connect";
import { getLocations } from "../../../action/location";
import LocationsView from "../common/location-view";
import PageHeader from "../../common/head-of-page";

class Locations extends React.Component {

    componentWillMount(){
        this.props.startLocations(this.props.city);
    }

    componentWillReceiveProps(newProps){
        if(newProps.city === this.props.city) {
            return;
        }
        this.props.startLocations(newProps.city);
    }

    render() {
        let { location:{ locations, selectedCity } } = this.props;
        let forRender = locations ? <LocationsView locations={locations}/> : null;

        let header = selectedCity ? selectedCity.name : "Loading...";
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
        startLocations: (city) => {
            dispatch(getLocations(city));
        }
    })
)(Locations);