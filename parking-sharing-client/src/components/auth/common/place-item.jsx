import React from "react";
import {Button} from "reactstrap";
import {PLACE_BUTTON_STATES} from "../../../constants/common";
let { FREE, TAKEN, LEAVING, REQUESTING } = PLACE_BUTTON_STATES;

class PlaceItem extends React.Component {

    state = {
        isLoading: false
    };

    changeLoadingState = (state) => {
            this.setState({ isLoading: state });
    };

    createButton = (color, text, handler) => {
        return <Button disabled={this.state.isLoading} onClick={handler} color={color}>{text}</Button>
    };

    getButton = () => {
        let { createButton } = this;
        let {place, onTake, onReject, onLeave, onCancelLeave} = this.props;

        switch (place.state) {
            case FREE: return createButton("success", "Take", ()=>{onTake(place._id, this.changeLoadingState)});
            case REQUESTING: return createButton("secondary", "Reject", ()=>{onReject(place._id, this.changeLoadingState)});
            case TAKEN: return createButton("danger", "Leave", ()=>{onLeave(place._id, this.changeLoadingState)});
            case LEAVING: return createButton("warning", "Cancel leaving", ()=>{onCancelLeave(place._id, this.changeLoadingState)});
            default: return null;
        }
    };

    render() {
        let {place} = this.props;
        let forOwner = place.owner ? `${place.owner.firstname} ${place.owner.lastname}` : "Owner not assigned";
        return (
            <tr>
                <th scope="row">{place.number}</th>
                <td>{forOwner}</td>
                <td>false</td>
                <td>
                    {this.getButton()}
                </td>
            </tr>

        )
    }
}

export default PlaceItem;