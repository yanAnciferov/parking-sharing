import React from 'react';
import { Table } from 'reactstrap';
import PlaceItem from "./place-item";
import connect from "react-redux/es/connect/connect";
import {
    requestForCancelLeavePlace,
    requestForLeavePlace,
    requestForRejectPlace,
    requestForTakePlace
} from "../../../action/place";

class PlacesView extends React.Component {



    render() {
        let places = this.props.places || [];

        return(
            <div className="places-wrapper">

                <Table>
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Owner</th>
                        <th>For motorcycle</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    {places.map((value, index) => {
                        return <PlaceItem
                            onReject={this.props.sendRequestForRejectPlace}
                            onTake={this.props.sendRequestForTakePlace}
                            onLeave={this.props.sendRequestForLeavePlace}
                            onCancelLeave={this.props.sendRequestForCancelLeavePlace}
                            key={index}
                            place={value}/>
                    })}
                    </tbody>
                </Table>

            </div>
        );
    }
}

export default connect(
    state => ({
        location: state.location
    }),
    dispatch => ({
        sendRequestForTakePlace: (idPlace, callback) => {
            dispatch(requestForTakePlace(idPlace, callback));
        },
        sendRequestForRejectPlace: (idPlace, callback) => {
            dispatch(requestForRejectPlace(idPlace, callback));
        },
        sendRequestForLeavePlace: (idPlace, callback) => {
            dispatch(requestForLeavePlace(idPlace, callback));
        },
        sendRequestForCancelLeavePlace: (idPlace, callback) => {
            dispatch(requestForCancelLeavePlace(idPlace, callback));
        }
    })
)(PlacesView);