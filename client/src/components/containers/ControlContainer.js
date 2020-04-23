import React from 'react'
import { connect } from 'react-redux'
import { mapLoginStatusToProps } from '../../stores/mappers'
import Navbar from '../Navbar'
import MenuDrawer from '../MenuDrawer'

const ControlContainer = ({ status }) => {

  return (
    <>
      <Navbar />
      { status === 'LOGGED_IN' ? (<MenuDrawer />) : ( null ) }
    </>
  )
}

export default connect(mapLoginStatusToProps)(ControlContainer)
