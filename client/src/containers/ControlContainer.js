import React, { Component } from 'react'
import NavBar from '../components/NavBar'
import MenuDrawer from '../components/MenuDrawer'

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
    return (
      <div>
        <NavBar
          handleDrawerToggle={this.handleDrawerToggle.bind(this)}
          drawerWidth={this.state.drawerWidth}
        />
        <MenuDrawer
          handleDrawerToggle={this.handleDrawerToggle.bind(this)}
          mobileOpen={this.state.mobileOpen}
          drawerWidth={this.state.drawerWidth}
        />
      </div>
    )
  }
}

export default ControlContainer
