import React from 'react';
import {
    Switch,
    Route
} from "react-router-dom";
import Home from '../pages/Home';
import Login from '../pages/Login';
import Forgot from '../pages/Forgot';
import Register from '../pages/Register';

const Routes = (props) => {
    return (
        <Switch>
            <Route path="/login">
                <Login />
            </Route>
            <Route path="/register">
                <Register addUser={user => props.addUser(user)}/>
            </Route>
            <Route path="/forgot">
                <Forgot/>
            </Route>
            <Route path="/">
                <Home />
            </Route>
        </Switch>
    );
}

export default Routes;