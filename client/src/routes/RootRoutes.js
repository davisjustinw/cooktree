import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import PrivateRoute from '../redirects/PrivateRoute'
import Connections from '../connections/Connections'
import Connection from '../connections/Connection'
import ConnectionNew from '../connections/ConnectionNew'
import Recipes from '../recipes/Recipes'
import Recipe from '../recipes/Recipe'
import RecipeNew from '../recipes/RecipeNew'
import Login from '../users/Login'
import Logout from '../users/Logout'
import Signup from '../users/Signup'
import Confirm from '../connections/Confirm'

//import PrivateRoutes from './PrivateRoutes'
//import PublicRoutes from './PublicRoutes'

const RootRoutes = () => {
  return (
    <Switch>
      <Route exact path='/login'>
        <Login/>
      </Route>
      <Route exact path='/logout' component={Logout} />
      <Route exact path='/signup/:token'>
        <Confirm/>
      </Route>
      <Route exact path='/signup'>
        <Signup/>
      </Route>

      <PrivateRoute exact path={`/users/:id/connections/new`} redirectTo='/login'>
        <ConnectionNew />
      </PrivateRoute>
      <PrivateRoute exact path={`/users/:id/connections/:id`} redirectTo='/login'>
        <Connection />
      </PrivateRoute>
      <PrivateRoute exact path={`/users/:id/connections`} redirectTo='/login'>
        <Connections />
      </PrivateRoute>
      <PrivateRoute exact path={`/recipes/new`} redirectTo='/login'>
        <RecipeNew/>
      </PrivateRoute>
      <PrivateRoute exact path={`/recipes/:id`} redirectTo='/login'>
        <Recipe/>
      </PrivateRoute>
      <PrivateRoute exact path={`/users/:id/recipes`} redirectTo='/login'>
        <Recipes/>
      </PrivateRoute>

      <Redirect to='/login'/>
    </Switch>
  )
}

export default RootRoutes
