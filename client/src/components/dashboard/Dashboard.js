import React, { Fragment } from 'react';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
//import { connect } from 'react-redux';

const Dashboard = () => {
    return (
        <Fragment>
            <h1>Dashboard</h1>
            <Link to="/stats">mood</Link>
        </Fragment>
    )
}

export default Dashboard;