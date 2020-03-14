import React, { Component } from 'react'
import Routes from './Routes'
import { connect } from 'react-redux'
import { getCurrentUser } from './actions/auth'
import ControlContainer from './containers/ControlContainer'
import { withStyles } from '@material-ui/core/styles'

class App extends Component {
  componentDidMount() {
    this.props.getCurrentUser()
  }

  render() {
    const { classes } = this.props
    return (
      <div className={classes.root}>
        <ControlContainer/>
        <Routes/>
      </div>
    )
  }
}

const styles = {
  root: {
    display: 'flex'
  }
}

const mapStateToProps = ({ auth }) => {
  return {
    user: auth.user
  }
}

export default connect(mapStateToProps, { getCurrentUser })(withStyles(styles)(App));
