import React, { Component } from 'react'
import RootRoutes from './components/routes/RootRoutes'
import { connect } from 'react-redux'
import { getCurrentUser } from './actions/auth'
import ControlContainer from './components/containers/ControlContainer'
import { withStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import ErrorMessage from './components/ErrorMessage'
import Box from '@material-ui/core/Box'
import Copyright from './components/Copyright'

class App extends Component {
  componentDidMount() {
    this.props.getCurrentUser()
  }

  render() {
    const { classes } = this.props
    return (
      <div className={classes.root}>
        <ControlContainer/>
        <Container component='main' maxWidth="xs" className={classes.content}>
          <div className={classes.toolbar} />
          <ErrorMessage/>
          <RootRoutes/>
          <Box mt={8}>
            <Copyright />
          </Box>
        </Container>
      </div>
    )
  }
}

const styles = theme => ({
  root: {
    display: 'flex'
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  }
})

const mapStateToProps = ({ auth }) => {
  return {
    user: auth.user
  }
}

export default connect(mapStateToProps, { getCurrentUser })(withStyles(styles)(App));
