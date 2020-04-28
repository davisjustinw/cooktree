import React from 'react'
import { Route, Switch, useRouteMatch } from 'react-router-dom'

import PrivateRoute from '../redirects/PrivateRoute'
import Connections from '../views/Connections'
import Connection from '../views/Connection'
import ConnectionNew from '../views/ConnectionNew'
import Recipes from '../views/Recipes'
import Recipe from '../views/Recipe'

const PrivateRoutes = () => {
  const match = useRouteMatch('/users/:id')
  console.log('private routes')
  console.log(match)
  return (
    <Switch>
      <PrivateRoute exact path={`${match.url}/connections/new`} redirectTo='/login'>
        <ConnectionNew />
      </PrivateRoute>
      <PrivateRoute exact path={`${match.url}/connections/:id`} redirectTo='/login'>
        <Connection />
      </PrivateRoute>
      <PrivateRoute exact path={`${match.url}/connections`} redirectTo='/login'>
        <Connections />
      </PrivateRoute>
      <PrivateRoute exact path={`${match.url}/recipes`} redirectTo='/login'>
        <Recipes/>
      </PrivateRoute>
      <PrivateRoute exact path={`${match.url}/recipes/:id`} redirectTo='/login'>
        <Recipe/>
      </PrivateRoute>
    </Switch>
  )
}

export default PrivateRoutes
