import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import Login from '../views/Login'
import Logout from '../views/Logout'
import Signup from '../views/Signup'
import UserRoutes from './UserRoutes'

const RootRoutes = () => {
  return (
    <Switch>
      <Route path='/users/:id'>
        <UserRoutes/>
      </Route>
      <Route path='/login'>
        <Login/>
      </Route>
      <Route path='/logout' component={Logout} />
      <Route path='/signup'>
        <Signup/>
      </Route>
      <Route path='/'>
        <Redirect to='/login'/>
      </Route>
    </Switch>
  )
}

export default RootRoutes
