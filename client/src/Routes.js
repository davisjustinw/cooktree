import React from 'react';

import { Switch, Route } from 'react-router-dom';

import PrivateRoute from './containers/PrivateRoute';
import Login from './routes/Login';
import Signup from './routes/Signup';
import Recipes from './routes/Recipes';

const Routes = props => {
    return (
      <Switch>
        <Route path='/login' component={Login} />
        <Route path='/signup' component={Signup} />
        <PrivateRoute path="/recipes" >
          <Recipes />
        </PrivateRoute>
      </Switch>
    )
}

export default Routes;
