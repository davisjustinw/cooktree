import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import NavBar from '../components/NavBar'
import MenuDrawer from '../components/MenuDrawer'
import { toggleMobileOpen } from '../actions/controls'

const ControlContainer = props => {
  const { location, drawerWidth, mobileOpen, toggleMobileOpen } = props
  const showControls = location.pathname !== '/login' && location.pathname !== '/signup'
  console.log(`showControls ${showControls}`)
  return (
    <>
      <NavBar
        handleDrawerToggle={toggleMobileOpen}
        drawerWidth={drawerWidth}
        showControls={showControls}
      />
      {
        showControls ? (
          <MenuDrawer
            toggleMobileOpen={toggleMobileOpen}
            mobileOpen={mobileOpen}
            drawerWidth={drawerWidth}
          />
        ) : ( null )
      }
    </>
  )
}

const mapStateToProps = ({ controls }) => ({
  drawerWidth: controls.drawerWidth,
  mobileOpen: controls.mobileOpen
})

export default connect(mapStateToProps, { toggleMobileOpen })(withRouter(ControlContainer))
