import React from 'react';
import {connect} from "react-redux";
import {LOGIN_ACTION_CREATORS} from "../../../action-creators/login";
import {DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown} from "reactstrap";
import {Link} from "react-router-dom";

class UserPanel extends React.Component {

    logOutHandler = (er) => {
        this.props.onLogout();
    };

    render() {
        let { user } = this.props.app;
        let forRender = user && user.isAdmin ?
            (
            <div>
                <Link className="dropdown-link" to={"/auth/main"}>
                    <DropdownItem>
                        My parking
                    </DropdownItem>
                </Link>
                <Link className="dropdown-link" to={"/admin/main"}>
                    <DropdownItem>
                            Admin
                    </DropdownItem>
                </Link>
                <DropdownItem divider />
            </div>
            ) : null;
        return(
            <div className="user-wrapper">
                <UncontrolledDropdown>
                    <DropdownToggle className="avatar">
                        {/*<img src="https://cube.lohika.com/0/img/entity/hash/SysImage/PreviewData/ca72fbcd-5394-4d26-9485-650bf4261ff4" alt="avatar"/>*/}
                    </DropdownToggle>
                    <DropdownMenu right>
                        {forRender}
                        <DropdownItem onClick={this.logOutHandler} >
                            Exit
                        </DropdownItem>
                    </DropdownMenu>
                </UncontrolledDropdown>
            </div>
        );
    }
}


export default connect(
    state => ({
        app: state.app
    }),
    dispatch => ({
        onLogout: () => {
            dispatch(LOGIN_ACTION_CREATORS.logout());
        }
    })
)(UserPanel);
