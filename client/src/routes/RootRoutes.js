import React from 'react'
import { Switch, Route } from 'react-router-dom'

import PrivateRoutes from './PrivateRoutes'
import PublicRoutes from './PublicRoutes'

const RootRoutes = () => {
  return (
    <Switch>
      <Route path='/users/:id'>
        <PrivateRoutes/>
      </Route>
      <Route path='/'>
        <PublicRoutes/>
      </Route>
    </Switch>
  )
}

export default RootRoutes
