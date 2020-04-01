import React from 'react'
import { withRouter } from 'react-router'
import Navbar from '../Navbar'
import MenuDrawer from '../MenuDrawer'

const ControlContainer = ({ location }) => {
  const showControls = location.pathname !== '/login' && location.pathname !== '/signup'

  return (
    <>
      <Navbar showControls={showControls} />
      { showControls ? (<MenuDrawer />) : ( null ) }
    </>
  )
}

export default withRouter(ControlContainer)
