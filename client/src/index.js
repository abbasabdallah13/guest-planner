import React from "react";
import ReactDOM from 'react-dom'
import App from "./App";
import { reducers } from './reducers/index'
import './index.scss'
import { createStore } from "redux";
import { applyMiddleware, compose } from 'redux'
import thunk from "redux-thunk"
import { Provider } from "react-redux";

const store = createStore(reducers, compose(applyMiddleware(thunk)))

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root')
);