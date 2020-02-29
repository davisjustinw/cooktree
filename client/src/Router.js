import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Login from './routes/Login';
import Signup from './routes/Signup';
import Recipes from './routes/Recipes';

const Router = (props) => (
  <Switch>
    <Route path='/login' component={Login} />
    <Route path='/signup' component={Signup} />
    <Route path='/recipes' component={Recipes} />
  </Switch>
)
export default Router;
