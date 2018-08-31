import React from 'react';
import LocationItem from "./location-item"

class LocationsView extends React.Component {


    render() {
        return(
            <div className="cities-wrapper">
                <div className="cities-list">
                    {this.props.locations.map((value, index) => {return <LocationItem key={index} locationItem={value}/> })}
                </div>
            </div>
        );
    }
}



export default LocationsView;