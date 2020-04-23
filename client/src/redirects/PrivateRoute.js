import React from 'react'
import { connect } from 'react-redux'
import { mapUserToProps } from '../stores/mappers'
import { Route, Redirect } from 'react-router-dom'
import Loading from '../components/Loading'

function PrivateRoute(props) {
  const {
    children,
    redirectTo,
    ...rest
  } = props
  const { status, location } = rest

  const authRoute = () => {
    switch(status) {
      case 'LOGGED_IN':
        console.log('pr LOGGED_IN')

        // how do I pass props to children here
        return children
      case 'LOGGED_OUT':
        console.log('pr LOGGED_OUT')

        return (
          <Redirect
            to={{
              pathname: redirectTo,
              state: { from: location.pathname }
            }}
          />
        )
      case 'LOGGING_IN':
        return <Loading/>
      default:
        return null
    }
  }
  return (
    <Route {...rest} render={authRoute}/>
  )
}

export default connect(mapUserToProps)(PrivateRoute)
