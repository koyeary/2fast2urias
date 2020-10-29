import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Register from '../auth/Register';
import Dashboard from '../dashboard/Dashboard';
import { Container } from 'react-bootstrap';


const Routes = props => {
    return(
        <Container>
            <Switch>
                <Route exact path="/register" component={Register} />
                <Route exact path="/dashboard" component={Dashboard} />
            </Switch>
        </Container>
    )
}

export default Routes;