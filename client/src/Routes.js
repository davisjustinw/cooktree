import React from 'react';

import { Switch, Route } from 'react-router-dom';

import PrivateRoute from './containers/PrivateRoute';
import Login from './routes/Login';
import Logout from './components/Logout'
import Signup from './routes/Signup';
import Recipes from './routes/Recipes';

const Routes = props => {
    return (
      <Switch>
        <Route exact path='/login' component={Login} />
        <Route exact path='/logout' component={Logout} />
        <Route exact path='/signup' component={Signup} />
        <PrivateRoute exact path="/" redirectTo="/login">
          <Recipes />
        </PrivateRoute>
        <PrivateRoute exact path="/recipes" redirectTo="/login">
          <Recipes />
        </PrivateRoute>
      </Switch>
    )
}

export default Routes;
