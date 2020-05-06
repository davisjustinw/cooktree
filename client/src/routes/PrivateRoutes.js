import React from 'react'
import { Switch, useRouteMatch } from 'react-router-dom'

import PrivateRoute from '../redirects/PrivateRoute'
import Connections from '../connections/Connections'
import Connection from '../connections/Connection'
import ConnectionNew from '../connections/ConnectionNew'
import Recipes from '../recipes/Recipes'
import Recipe from '../recipes/Recipe'
import RecipeNew from '../recipes/RecipeNew'

const PrivateRoutes = () => {
  const match = useRouteMatch('/users/:id')

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

      <PrivateRoute exact path={`${match.url}/recipes/new`} redirectTo='/login'>
        <RecipeNew/>
      </PrivateRoute>
      <PrivateRoute exact path={`${match.url}/recipes/:id`} redirectTo='/login'>
        <Recipe/>
      </PrivateRoute>
      <PrivateRoute exact path={`${match.url}/recipes`} redirectTo='/login'>
        <Recipes/>
      </PrivateRoute>
    </Switch>
  )
}

export default PrivateRoutes
