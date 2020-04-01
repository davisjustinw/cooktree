import React from 'react'
import { Route, Switch, useRouteMatch } from 'react-router-dom'
import { connect } from 'react-redux'
import { mapPersonToProps } from '../helpers/stateMappers'
import Connections from './Connections'
import ConnectionNew from './ConnectionNew'
import Recipes from './Recipes'
import PrivateRoute from '../redirects/PrivateRoute'

const People = ({ person }) => {
  const match = useRouteMatch('/people/:id')
  return (
    <>
      <Switch>
        <PrivateRoute path={`${match.url}/connections/new`} redirectTo='/login'>
          <ConnectionNew person={person} />
        </PrivateRoute>
        <PrivateRoute path={`${match.url}/connections`} redirectTo='/login'>
          <Connections person={person} />
        </PrivateRoute>
        <Route path={`${match.url}/recipes`} component={Recipes}/>
      </Switch>
    </>
  )
}

export default connect(mapPersonToProps)(People)
