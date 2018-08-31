import PageHeader from "../../common/head-of-page";
import React from 'react';
import Place from "../common/place";
import {Link, withRouter} from "react-router-dom";
import connect from "react-redux/es/connect/connect";
import {getMyPlace} from "../../../action/account";

class MyPlace extends React.Component {

    componentWillMount(){
        this.props.start();
    }

    render() {
        let { place } = this.props;
        return(
            <div className="my-place-wrapper">
                <PageHeader>My place</PageHeader>
                <div className="my-place-content">
                    { place ? <Place place={place} /> : <NoPlace/> }
                </div>
            </div>
        );
    }
}

class NoPlace extends React.Component {
    render() {
        return(
            <div className="message-wrapper">
                <div className="message-content">
                    <div className="head-message">You did not take up parking space</div>
                    <div className="message-container">
                        <div className="body-message">
                            For take up a place you need to go to "<Link to="/auth/free-places">Free places</Link>"
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(connect(
    state => ({
        place: state.place.place
    }),
    dispatch => ({
        start: () => {
            dispatch(getMyPlace());
        }
    })
)(MyPlace))