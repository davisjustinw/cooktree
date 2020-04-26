import React from 'react'
import { Route, Switch, useRouteMatch } from 'react-router-dom'

import PrivateRoute from '../redirects/PrivateRoute'
import Connections from '../views/Connections'
import Connection from '../views/Connection'
import ConnectionNew from '../views/ConnectionNew'
import Recipes from '../views/Recipes'

const PrivateRoutes = () => {
  const match = useRouteMatch('/users/:id')
  console.log('private routes')
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
      <Route exact path={`${match.url}/recipes`} component={Recipes}/>

    </Switch>
  )
}

export default PrivateRoutes
