import { withRouter } from 'react-router';
import React from "react";
import {Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";
import {Link} from "react-router-dom";
import connect from "react-redux/es/connect/connect";
import {LOCATION_ACTION_CREATORS} from "../../action-creators/location";


class SelectCity extends React.Component {

    state = {
        dropdownOpen: false
    };

    toggle = (e) => {
        this.setState(prevState => ({
            ...prevState,
            dropdownOpen: !prevState.dropdownOpen
        }));
    };

    selectedChange = (e) => {
        let city = e.target.innerText;
        this.props.changeSelectedCity({name: city});

    };

    render() {

        let {dropdownOpen} = this.state;
        let { selectedCity } = this.props.location;
        selectedCity = selectedCity ?  selectedCity.name : "";
        return (
            <Dropdown isOpen={dropdownOpen} toggle={this.toggle}>
                <DropdownToggle  className="citySelect" caret>
                    {selectedCity}
                </DropdownToggle>
                <DropdownMenu>
                    <Link to={"/auth/city/Odessa"}>
                        <DropdownItem onClick={this.selectedChange}>Odessa</DropdownItem>
                    </Link>
                    <Link to={"/auth/city/Kyev"}>
                        <DropdownItem onClick={this.selectedChange}>Kyev</DropdownItem>
                    </Link>
                    <Link to={"/auth/city/Lviv"}>
                        <DropdownItem onClick={this.selectedChange}>Lviv</DropdownItem>
                    </Link>
                </DropdownMenu>
            </Dropdown>
        );
    }
}


export default withRouter(connect(
    state => ({
        location: state.location
    }),
    dispatch => ({
        changeSelectedCity: (city) => {
            dispatch(LOCATION_ACTION_CREATORS.setSelectedCity(city))
        }
    })
)(SelectCity));
