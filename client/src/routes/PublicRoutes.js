import React from 'react'
import { connect } from 'react-redux'
import { Route, Switch, Redirect } from 'react-router-dom'
import Login from '../views/Login'
import Logout from '../views/Logout'
import Signup from '../views/Signup'

const PublicRoutes = () => {
  console.log('public routes')
  return (
    <Switch>
      <Route path='/login'>
        <Login/>
      </Route>
      <Route path='/logout' component={Logout} />
      <Route path='/signup/:token'>
        <Signup/>
      </Route>
      <Route path='/signup'>
        <Signup/>
      </Route>
      <Route path='/'>
        <Redirect to='/login'/>
      </Route>
    </Switch>
  )
}

export default connect(null)(PublicRoutes)
