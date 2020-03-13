import React, { Component } from 'react'
import NavBar from '../components/NavBar'
import MenuDrawer from '../components/MenuDrawer'
import { withRouter } from 'react-router'

class ControlContainer extends Component {
  constructor(props) {
    super()
    this.state = {
      mobileOpen: false,
      drawerWidth: 240
    }
  }

  handleDrawerToggle() {
    this.setState({
      mobileOpen: !this.state.mobileOpen
    })
  }

  render(){
    const { location } = this.props
    const showControls = location.pathname !== '/login' && location.pathname !== '/signup'
    return (
      <div>
        <NavBar
          handleDrawerToggle={this.handleDrawerToggle.bind(this)}
          drawerWidth={this.state.drawerWidth}
          showControls={showControls}
        />
        {
          showControls ? (
            <MenuDrawer
              handleDrawerToggle={this.handleDrawerToggle.bind(this)}
              mobileOpen={this.state.mobileOpen}
              drawerWidth={this.state.drawerWidth}
            />
          ) : ( null )
        }
      </div>
    )
  }
}

export default withRouter(ControlContainer)
