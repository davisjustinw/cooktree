import React from 'react'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'
import Loading from '../components/Loading'

function PrivateRoute({ children, redirectTo, ...rest }) {
  const { authStatus, location } = rest

  const authRoute = () => {
    switch(authStatus) {
      case 'LOGGED_IN':
        console.log('pr_logged in')
        return children
      case 'LOGGED_OUT':
        console.log('pr_logged out')
        return (
          <Redirect
            to={{
              pathname: redirectTo,
              state: { from: location.pathname }
            }}
          />
        )
      case 'REQUESTING':
        console.log('pr_requesting')
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
