/**
 * Created by Murkrow on 5/16/2017.
 */

import React, {Component} from  'react';
import configureStore from "./configureStore";
import {Provider} from "react-redux";
import AppRoute from "./Route";

const store = configureStore();

export default class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Provider store={store}>
                <AppRoute/>
            </Provider>
        );
    }
}


