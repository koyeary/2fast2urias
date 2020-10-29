import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const Landing = () => {

    return(
        <Fragment>
            <h1>Landing page</h1>
            <p>
                <Link className="btn btn-primary btn-lg" to="/register">Sign Up</Link>
                <Link className="btn btn-primary btn-lg" to="/dashboard">Sign In</Link>
            </p>
        </Fragment>
    )
}

export default Landing;