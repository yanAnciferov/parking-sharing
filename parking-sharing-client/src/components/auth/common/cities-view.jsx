import React from 'react';
import CityItem from "./city-item"

class CitiesView extends React.Component {


    render() {
        return(
            <div className="cities-wrapper">
                <div className="cities-list">
                    {this.props.cities.map((value, index) => {return <CityItem key={index} city={value}/> })}
                </div>
            </div>
        );
    }
}



export default CitiesView;