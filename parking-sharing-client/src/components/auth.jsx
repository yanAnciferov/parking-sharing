import React from 'react';
import SidePanel from "./common/side-panel";
import MainPanel from "./auth/common/main-panel";
import UserPanel from "./auth/common/user-panel";
import { withRouter } from 'react-router-dom';

class Auth extends React.Component {


    render() {
        return (
            <div className="auth-app">
                <SidePanel/>
                <MainPanel/>
                <UserPanel/>
            </div>
        );
    }
}


export default withRouter(Auth);