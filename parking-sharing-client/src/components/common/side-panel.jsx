import React from 'react';
import {Link, Route, Switch} from "react-router-dom";
import {connect} from "react-redux";
import {withRouter} from "react-router";
import {PATHS} from "../../constants/paths";
import SelectCity from "./select-for-city";

function className(param){
    let currentSelect = document.location.pathname.split('/')[2];
    return  param.indexOf(currentSelect) !== -1 ? "selected-menu-item" : ""
}

class SidePanel extends React.Component {

    state = {
        toggle: false
    };

    toggleHandler = () => {
        this.setState({toggle: !this.state.toggle});
    };

    render() {
        let { toggle } = this.state;
        return(
            <div className={`side-wrapper ${toggle ? "close-menu" : null}`}>
                <div className="side-menu-wrapper">
                    <div className="d-flex justify-content-end w-100">
                        <ToggleButton onClick={this.toggleHandler} toggle={this.state.toggle}/>
                    </div>

                    <div className="side-menu-main">
                        <Switch>
                            <Route path={PATHS.AUTH + "/*"} render={() => (
                                <AuthSideMenu/>
                            )}/>
                            <Route path={"/admin/*"} render={() => (
                                <AdminSideMenu/>
                            )}/>
                        </Switch>
                    </div>

                </div>

            </div>
        );
    }
}


class ToggleButton extends React.Component {

    handle = () => {
        this.props.onClick();
    };

    render() {
        let { props: { toggle } } = this;
        return (
            <div onClick={this.handle} className="toggle-button">
                <img src={toggle ? "/icons/next.svg" : "/icons/back.svg"} alt="back"/>
            </div>
        )
    }
}


class AuthSideMenu extends React.Component {


    render() {

        let paths = [
            {
                iconPathGreen: "/icons/profile-green.svg",
                iconPathWhite: "/icons/profile-white.svg",
                classLink: "my-place",
                to: "/auth/my-place",
                text: "My place"
            },
            {
                iconPathGreen: "/icons/placeholder-green.svg",
                iconPathWhite: "/icons/placeholder-white.svg",
                classLink: ["city", "location"],
                to: "/auth/city/Odessa",
                text: "Locations"
            },
            {
                iconPathGreen: "/icons/star-green.svg",
                iconPathWhite: "/icons/star-white.svg",
                classLink: "free-places",
                to: "/auth/free-places",
                text: "Free places"
            },
            {
                iconPathGreen: "/icons/feedback-green.svg",
                iconPathWhite: "/icons/feedback-white.svg",
                classLink: "feed",
                to: "/auth/feed",
                text: "Feedback"
            },

        ];

        return (
           <div>
               <div id="location-combo">
                   <SelectCity/>
               </div>
               <div className="side-menu">
                   {
                       paths.map((path, index) => {
                           return <MenuItem key={index} {...path}/>
                       })
                   }

               </div>
           </div>
        )
    }
}

class MenuItem extends React.Component {
    render() {
        let { iconPathGreen, iconPathWhite, to, classLink, text } = this.props;
        let cl = className(classLink);
       return (
           <Link className={`${cl} menu-item`} to={to}>
               <div className="icon-bar">
                   <img src={!cl ? iconPathGreen : iconPathWhite } alt="icon"/>
               </div>
               <span className="menu-item-text">{text}</span>
           </Link>
       )
    }
}

class AdminSideMenu extends React.Component {


    render() {
        let paths = [
            {
                iconPathGreen: "/icons/placeholder-green.svg",
                iconPathWhite: "/icons/placeholder-white.svg",
                classLink: "main",
                to: "/admin/main",
                text: "Main"
            },
            {
                iconPathGreen: "/icons/user-plus-green.svg",
                iconPathWhite: "/icons/user-plus-white.svg",
                classLink: "requests-for-taking",
                to: "/admin/requests-for-taking",
                text: "Take requests"
            },
            {
                iconPathGreen: "/icons/user-minus-green.svg",
                iconPathWhite: "/icons/user-minus-white.svg",
                classLink: "requests-for-leaving",
                to: "/admin/requests-for-leaving",
                text: "Leave requests"
            }

        ];

        return (
            <div className="side-menu">
                {
                    paths.map((path, index) => {
                        return <MenuItem key={index} {...path}/>
                    })
                }

            </div>
        )
    }
}




export default withRouter(connect(
    state => ({
        app: state.app
    })
)(SidePanel));