import React from 'react'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'
import Loading from '../components/Loading'

function PrivateRoute({ children, redirectTo, ...rest }) {
  console.log('private route')
  console.log(rest)
  const { requesting, user } = rest

  const authRoute = ({ location }) => (
    requesting ? (
      <Loading/>
    ) : (
      user ? (
        children
      ) : (
        <Redirect
          to={{
            pathname: redirectTo,
            state: { from: location.pathname }
          }}
        />
      )
    )
  )
  return <Route {...rest} render={authRoute}/>
}

const mapStateToProps = ({ auth }) => {
  return {
    user: auth.user,
    requesting: auth.requesting
  }
}

export default connect(mapStateToProps)(PrivateRoute)
