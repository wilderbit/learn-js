import React from "react";
import {Provider} from "react-redux";
import { store } from '../store';
import { ConnectedDashboard } from '../component/Dashboard'


export const Main = () => (
    <Provider store={store}>
        <div>
            <ConnectedDashboard></ConnectedDashboard>
        </div>
    </Provider>
)