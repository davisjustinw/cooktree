import React from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { mapAuthToProps } from '../helpers/stateMappers'

const RedirectLoggedIn = ({ status, person }) => {
  if (status === 'LOGGED_IN') {
    console.log("redirecting from login")
    // may need a check here for authorized routes
    //const { from } = location.state || { from: { pathname: `people/${person.id}/connections` }}
    return <Redirect to={{ pathname: `people/${person.id}/connections` }} />
  }
  return null
}

export default connect(mapAuthToProps)(RedirectLoggedIn)
