import React from 'react';
import connect from "react-redux/es/connect/connect";
import { getLocations } from "../../../action/location";
import PageHeader from "../../common/head-of-page";
import {getRequestsForTaking, rejectRequestForTaking, acceptRequestForTaking} from "../../../action/admin";
import {ADMIN_ACTION_CREATORS} from "../../../action-creators/admin";
import { ListRequests, NoRequests } from "../common/requests-list";

class RequestsForTaking extends React.Component {

    componentWillMount = () => {
        this.props.getTakingRequests();
    };

    render() {
        let { requestForTake } = this.props.admin;
        let forRender = requestForTake.length ? <ListRequests {...this.props} list={requestForTake}/> : <NoRequests/>;
        return(
            <div className="locations-wrapper">
                <PageHeader>Requests for taking place</PageHeader>
                {forRender}
            </div>
        );
    }
}

export default connect(
    state => ({
        location: state.location,
        admin: state.admin
    }),
    dispatch => ({
        startLocations: (city) => {
            dispatch(getLocations(city));
        },
        getTakingRequests: () => {
            dispatch(getRequestsForTaking())
        },
        acceptRequest: (idRequest, loading) => {
            dispatch(acceptRequestForTaking(idRequest, loading));
        },
        rejectRequest: (idRequest, loading) => {
            dispatch(rejectRequestForTaking(idRequest, loading));
        },
        deleteRequest: (idRequest) => {
            dispatch(ADMIN_ACTION_CREATORS.deleteRequestForTaking(idRequest));
        }
    })
)(RequestsForTaking);