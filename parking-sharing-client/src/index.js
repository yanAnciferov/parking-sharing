import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import createHistory from "history/createBrowserHistory";
import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk'
import { Provider } from "react-redux";
import { ConnectedRouter, routerReducer, routerMiddleware } from "react-router-redux";
import Reducers from "./reducers/index";
import 'bootstrap/dist/css/bootstrap.min.css';

const history = createHistory();
const middleware = routerMiddleware(history);
const store = createStore(
    combineReducers({
        ...Reducers,
        router: routerReducer
    }),
    applyMiddleware(middleware, thunk)
);

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App />
        </ConnectedRouter>
    </Provider>, document.getElementById('root'));
registerServiceWorker();
