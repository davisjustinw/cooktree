import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

const Private = ({ status }) => {
  console.log(`private: ${status}`)
  switch(status){
    case 'LOGGED_IN':
      console.log('private LOGGED_IN')
      return null
    default:
      console.log('private redirecting')
      return <Redirect to='/login'/>
  }
}

const mapStateToProps = ({ auth }) => ({
  status: auth.status
})

export default connect(mapStateToProps)(Private)
