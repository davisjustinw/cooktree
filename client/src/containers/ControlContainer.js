import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import NavBar from '../components/NavBar'
import MenuDrawer from '../components/MenuDrawer'
import { toggleMobileOpen } from '../actions/controls'

const ControlContainer = props => {
  const { location, mobileOpen, toggleMobileOpen } = props
  const showControls = location.pathname !== '/login' && location.pathname !== '/signup'

  return (
    <>
      <NavBar
        handleDrawerToggle={toggleMobileOpen}
        showControls={showControls}
      />
      {
        showControls ? (
          <MenuDrawer
            toggleMobileOpen={toggleMobileOpen}
            mobileOpen={mobileOpen}
          />
        ) : ( null )
      }
    </>
  )
}

const mapStateToProps = ({ controls }) => ({
  mobileOpen: controls.mobileOpen
})

export default connect(mapStateToProps, { toggleMobileOpen })(withRouter(ControlContainer))
