import React from 'react';
import Breadcrumbs from "../common/breadcrumbs";
import CitiesView from "../common/cities-view";
import {connect} from "react-redux";
import {getCities} from "../../../action/location";
import PageHeader from "../../common/head-of-page";

class Main extends React.Component {

    componentWillMount(){
        this.props.getCities();
    }

    render() {
        let { cities } = this.props.location;
        let forRender = cities ? <CitiesView cities={cities}/> : null;
        return(
            <div className="locations-wrapper">
                <PageHeader>Main</PageHeader>
                <Breadcrumbs/>
                {forRender}
            </div>
        );
    }
}


export default connect(
    state => ({
        app: state.app,
        location: state.location
    }),
    dispatch => ({
        getCities: () => {
            dispatch(getCities())
        }
    })
)(Main)