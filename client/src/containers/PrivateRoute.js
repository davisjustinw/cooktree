import React from 'react'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'
import Loading from '../components/Loading'

function PrivateRoute({ children, redirectTo, ...rest }) {
  const { authStatus, location } = rest

  const authRoute = () => {
    switch(authStatus) {
      case 'LOGGED_IN':
        return children
      case 'LOGGED_OUT':
        return (
          <Redirect
            to={{
              pathname: redirectTo,
              state: { from: location.pathname }
            }}
          />
        )
      case 'REQUESTING':
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
