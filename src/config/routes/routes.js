/**
 * Created by Admin on 12/28/2016.
 */


import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import { Route, IndexRoute, Router } from 'react-router'
import App from '../../containers/app/app'
import Home from '../../containers/home/home'
import signup from '../../containers/signup/signup'
import signin from '../../containers/signin/signin'

export default function Root({history, store}) {
    return (
<Provider store={store}>
  <Router history={history}>
     <Route path='/' component={App}>
        <IndexRoute component={Home} />
        <Route path='signup' component={signup} />
        <Route path='signin' component={signin} />
    </Route>
  </Router>
 </Provider>
    );
}

Root.propTypes = {
    history: PropTypes.object.isRequired,
    store: PropTypes.object.isRequired
};

