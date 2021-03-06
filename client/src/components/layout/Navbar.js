import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Nav, Button } from 'react-bootstrap';
import { logout } from '../../actions/auth';

const Navbar = ({ auth: { isAuthenticated }, logout}) => {
  const authLinks = (
    <ul className='navbar-nav mr-auto'>
      <li>
        <Link to="/dashboard">
          <i className="fas fa-user" />{' '}
          <span className="hide-sm">Dashboard</span>
        </Link>
      </li>
      <li>
        <a onClick={logout} href="#!">
          <i className="fas fa-sign-out-alt" />{' '}
          <span className="hide-sm">Logout</span>
        </a>
      </li>
    </ul>
  ); 

  const guestLinks = (
    <ul>
      <li>
        <Link to="/register">Sign Up</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
    </ul>
  );

  return (
      <nav className="navbar bg-dark">
        <h1>
          <Link to="/">
            <i className="fas fa-code" /> DevConnector
          </Link>
        </h1>
        <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
      </nav>
  );
  };
   /*  <Fragment>
      <Nav className='navbar navbar-expand-lg navbar-light bg-light'>
        <Link className='navbar-brand' to='#'>
          Navbar
        </Link>
        <Button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </Button>

        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav mr-auto'>
            <li className='nav-item active'>
              <Link className='nav-link' to='/'>
                Home <span className='sr-only'>(current)</span>
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='register'>
                <i className= "fa fa-user" />{' '}
                <span>Logout</span>
              </Link>
            </li>
            <li className='nav-item dropdown'>
              <Link
                className='nav-link dropdown-toggle'
                to='#'
                id='navbarDropdown'
                role='button'
                data-toggle='dropdown'
                aria-haspopup='true'
                aria-expanded='false'
              >
                Dropdown
              </Link>
              <div className='dropdown-menu' aria-labelledby='navbarDropdown'>
                <Link className='dropdown-item' to='#'>
                  Action
                </Link>
                <Link className='dropdown-item' to='#'>
                  Another action
                </Link>
                <div className='dropdown-divider'></div>
                <Link className='dropdown-item' to='#'>
                  Something else here
                </Link>
              </div>
            </li>
            <li className='nav-item'>
              <Link className='nav-link disabled' to='#'>
                Disabled
              </Link>
            </li>
          </ul>
          <form className='form-inline my-2 my-lg-0'>
            <input
              className='form-control mr-sm-2'
              type='search'
              placeholder='Search'
              aria-label='Search'
            />
            <Button
              className='btn btn-outline-success my-2 my-sm-0'
              type='submit'
            >
              Search
            </Button>
          </form>
        </div>
      </Nav>
    </Fragment> */


    Navbar.propTypes = {
      logout: PropTypes.func.isRequired,
      auth: PropTypes.object.isRequired
    };
    
    const mapStateToProps = (state) => ({
      auth: state.auth
    });
    
    export default connect(mapStateToProps, { logout })(Navbar);
