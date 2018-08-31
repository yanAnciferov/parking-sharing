import React from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {LOCATION_ACTION_CREATORS} from "../../../action-creators/location";

class CityItem extends React.Component {

    onClickHandler = () => {
        this.props.changeSelectedCity(this.props.city)
    };

    render() {
        let {city} = this.props;
        return (
            <div className="city-item">
                <Link className="item-link" onClick={this.onClickHandler} to={`/auth/city/${city.name}`}>
                    {city.name}
                </Link>
            </div>

        )
    }
}



export default connect(
    state => ({
        location: state.location
    }),
    dispatch => ({
        changeSelectedCity: (city) => {
            dispatch(LOCATION_ACTION_CREATORS.setSelectedCity(city))
        }
    })
)(CityItem);
