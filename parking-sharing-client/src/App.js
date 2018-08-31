import React, { Component } from 'react';
import AppRoutes from './components/app-routes'
import connect from "react-redux/es/connect/connect";
import {getAuthUserData} from "./action/account";
import {withRouter} from "react-router";

class App extends Component {

  componentWillMount(){
    this.props.getUserData();
  }


  render() {
    return (
      <div className="App">
          <AppRoutes/>
      </div>
    );
  }
}


export default withRouter(connect(
    state => ({}),
    dispatch => ({
        getUserData: ()=>{
            dispatch(getAuthUserData());
        }
    }))(App));
