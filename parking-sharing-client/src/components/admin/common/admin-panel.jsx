import React from 'react';
import AdminRoutes from "./admin-routes";
import {connect} from "react-redux";

class AdminPanel extends React.Component {


    render() {
        return (
            <div className="main-wrapper">
                <div className="main-paper">
                    <AdminRoutes/>
                </div>
            </div>
        );
    }
}

export default connect(
    state => ({
        app: state.app
    })
)(AdminPanel)
