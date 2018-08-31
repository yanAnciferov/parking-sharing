import React from 'react';
import connect from "react-redux/es/connect/connect";
import PageHeader from "../../common/head-of-page";
import {
    rejectRequestForLeaving,
    acceptRequestForLeaving,
    getRequestsForLeaving
} from "../../../action/admin";
import {ADMIN_ACTION_CREATORS} from "../../../action-creators/admin";
import {NoRequests, ListRequests} from "../common/requests-list";


class RequestsForLeaving extends React.Component {

    componentWillMount = () => {
        this.props.getLeavingRequests();
    };

    render() {
        let { requestForLeave } = this.props.admin;
        let forRender = requestForLeave.length ? <ListRequests {...this.props} list={requestForLeave}/> : <NoRequests/>;
        return(
            <div className="locations-wrapper">
                <PageHeader>Requests for leaving place</PageHeader>
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

        getLeavingRequests: () => {
            dispatch(getRequestsForLeaving())
        },
        acceptRequest: (idRequest, loading) => {
            dispatch(acceptRequestForLeaving(idRequest, loading));
        },
        rejectRequest: (idRequest, loading) => {
            dispatch(rejectRequestForLeaving(idRequest, loading));
        },
        deleteRequest: (idRequest) => {
            dispatch(ADMIN_ACTION_CREATORS.deleteRequestForLeaving(idRequest));
        }
    })
)(RequestsForLeaving);