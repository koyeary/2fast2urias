import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Routes from './components/routing/Routes';
import Landing from './components/layout/Landing';


// Redux
//import { Provider } from 'react-redux';
//import store from './store';


const App = () => {
  /* useEffect(() => {
    // check for token in LS
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
    store.dispatch(loadUser());

    // log user out from all tabs if they log out in one tab
    window.addEventListener('storage', () => {
      if (!localStorage.token) store.dispatch({ type: LOGOUT });
    });
  }, []);
 */
  return (
      <Router>
        <Fragment>
          <Route exact path="/" component={Landing}/>
          <Route component={Routes} />
        </Fragment>
      </Router>
  );
};

export default App;

