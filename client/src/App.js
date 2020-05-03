import React, { Component } from 'react'
import { connect } from 'react-redux'
import RootRoutes from './routes/RootRoutes'
import ControlContainer from './layout/ControlContainer'
import { withStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import ErrorMessage from './shared/ErrorMessage'
import Box from '@material-ui/core/Box'
import Copyright from './layout/Copyright'
import { getCurrentUser } from './stores/user/userActions'

class App extends Component {
  componentDidMount(){
    getCurrentUser()
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

        </Container>
        <Box mt={8} className={classes.footer}>
          <Copyright />
        </Box>
      </div>
    )
  }
}

const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  toolbar: theme.mixins.toolbar,
  content: {

    flexGrow: 1,
    padding: theme.spacing(3),
  },
  footer: {
    alignSelf: 'center'
  }
})

const mapDispatchToProps = dispatch => ({
  getCurrentUser: dispatch(getCurrentUser())
})

export default connect(null, mapDispatchToProps)(withStyles(styles)(App));
