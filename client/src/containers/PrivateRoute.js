import React from 'react'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'
import Loading from '../components/Loading'

function PrivateRoute({ children, ...rest }) {
  console.log('private route')
  console.log(rest)

  const authRoute = ({ location }) => (
    rest.requesting ? (
      <Loading/>
    ) : (
      rest.user.email ? (
        children
      ) : (
        <Redirect
          to={{
            pathname: "/login",
            state: { from: location }
          }}
        />
      )
    )

  )

  return <Route {...rest} render={authRoute}/>
}

const mapStateToProps = state => {
  return {
    user: state.auth.user,
    requesting: state.auth.requesting
  }
}

export default connect(mapStateToProps)(PrivateRoute)
