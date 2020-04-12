import React from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { mapUserToProps } from '../stores/mappers'

const RedirectLoggedIn = ({ status, person_id }) => {
  if (status === 'LOGGED_IN') {
    console.log("redirecting from login")
    // may need a check here for authorized routes
    //const { from } = location.state || { from: { pathname: `people/${person.id}/connections` }}
    return <Redirect to={{ pathname: `people/${person_id}/connections` }} />
  }
  return null
}

export default connect(mapUserToProps)(RedirectLoggedIn)
