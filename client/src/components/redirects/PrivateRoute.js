import React from 'react'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'
import Loading from '../Loading'

function PrivateRoute({ children, redirectTo, ...rest }) {
  console.log('PrivateRoute')
  console.log(rest)
  const { authStatus, location } = rest
  const authRoute = () => {
    switch(authStatus) {
      case 'LOGGED_IN':
        console.log('pr LOGGED_IN')
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
  return <Route {...rest} render={authRoute}/>
}

const mapStateToProps = ({ auth }) => {
  return {
    user: auth.user,
    authStatus: auth.status
  }
}

export default connect(mapStateToProps)(PrivateRoute)
