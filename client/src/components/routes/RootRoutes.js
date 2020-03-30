import React from 'react'
import { connect } from 'react-redux'
import { Switch, Route, Redirect } from 'react-router-dom'

import Login from './Login'
import Logout from './Logout'
import Signup from './Signup'
import People from './People'

const RootRoutes = ({ status, person }) => {
  return (
    <Switch>
      <Route path='/people/:personId'>
        <People person={person}/>
      </Route>
      <Route path='/login'>
        <Login status={status} person={person}/>
      </Route>
      <Route path='/logout' component={Logout} />
      <Route path='/signup'>
        <Signup status={status}/>
      </Route>
      <Route path='/'>
        <Redirect to='/login'/>
      </Route>
    </Switch>
  )
}

const mapStateToProps = ({ auth }) => ({
  status: auth.status,
  person: auth.person
})

export default connect(mapStateToProps)(RootRoutes)
