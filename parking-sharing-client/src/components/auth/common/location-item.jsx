import React from "react";
import {Link} from "react-router-dom";
import connect from "react-redux/es/connect/connect";
import {LOCATION_ACTION_CREATORS} from "../../../action-creators/location";

class LocationItem extends React.Component {

    onClickHandler = () => {
        this.props.changeSelectedLocation(this.props.locationItem);
    };

    render() {
        let {locationItem} = this.props;
        return (
            <div className="city-item">
                <Link className="item-link" onClick={this.onClickHandler} to={`/auth/location/${locationItem._id}`}>
                    {locationItem.name}
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
        changeSelectedLocation: (location) => {
            dispatch(LOCATION_ACTION_CREATORS.setSelectedLocation(location))
        }
    })
)(LocationItem);