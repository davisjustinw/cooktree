import React from 'react'
import { withRouter } from 'react-router'
import NavBar from '../NavBar'
import MenuDrawer from '../MenuDrawer'

const ControlContainer = ({ location }) => {
  const showControls = location.pathname !== '/login' && location.pathname !== '/signup'

  return (
    <>
      <NavBar showControls={showControls} />
      { showControls ? (<MenuDrawer />) : ( null ) }
    </>
  )
}

export default withRouter(ControlContainer)
