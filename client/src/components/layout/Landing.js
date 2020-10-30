import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';

const Landing = ({ isAuthenticated }) => {
    if(isAuthenticated) {
        <Redirect to='/dashboard'/>
      }
    
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

Landing.propTypes = {
    isAuthenticated: PropTypes.bool
  }
  
  const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
  });
  
  export default connect(mapStateToProps)(Landing);
  
