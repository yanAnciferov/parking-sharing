import React from 'react';
import SidePanel from "./common/side-panel";
import AdminPanel from "./admin/common/admin-panel";
import { withRouter } from 'react-router-dom';

class Admin extends React.Component {


    render() {
        return (
            <div className="auth-app">
                <SidePanel/>
                <AdminPanel/>
            </div>
        );
    }
}


export default withRouter(Admin);