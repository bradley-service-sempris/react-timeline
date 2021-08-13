import React from 'react';
// import { connect } from 'react-redux';
import {
    BrowserRouter as Router,
    // Redirect,
    Route,
    Switch
} from 'react-router-dom';

const AppRouter = () => {
    return (
        <Router>
            <Switch>
                <Route
                    exact
                    path="/"
                />
            </Switch>
        </Router>
    )
};

export default AppRouter;
