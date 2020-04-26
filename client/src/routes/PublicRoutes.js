import React from 'react'
import { connect } from 'react-redux'
import { Route, Switch, Redirect } from 'react-router-dom'
import Login from '../views/Login'
import Logout from '../views/Logout'
import Signup from '../views/Signup'
import Confirm from '../views/Confirm'

const PublicRoutes = () => {
  console.log('public routes')
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
      <Redirect to='/login'/>
    </Switch>
  )
}

export default connect(null)(PublicRoutes)
