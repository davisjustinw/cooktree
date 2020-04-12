import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import Login from '../views/Login'
import Logout from '../views/Logout'
import Signup from '../views/Signup'
import PeopleRoutes from './PeopleRoutes'

const RootRoutes = () => {
  return (
    <Switch>
      <Route path='/people/:personId'>
        <PeopleRoutes/>
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
