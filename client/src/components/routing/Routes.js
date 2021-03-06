import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Register from '../auth/Register';
import Login from '../auth/Login';
import Dashboard from '../dashboard/Dashboard';
import Stats from '../forms/Stats';
import { Container } from 'react-bootstrap';
import PrivateRoute from '../routing/PrivateRoute';

const Routes = props => {
    return(
        <Container>
            <Switch>
                <Route exact path="/register" component={Register} />
                <Route exact path="/login" component={Login} />
                <PrivateRoute exact path="/dashboard" component={Dashboard} />
                <PrivateRoute exact path="/stats" component={Stats} />
            </Switch>
        </Container>
    )
}

export default Routes;