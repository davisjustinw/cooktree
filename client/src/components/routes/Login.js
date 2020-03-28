import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect, Link as RouterLink } from 'react-router-dom';
import { changeHandler } from '../../handlers/form'
import { submitLogin } from '../../actions/auth'
import ErrorMessage from '../ErrorMessage'
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import Container from '@material-ui/core/Container'
import Button from '@material-ui/core/Button'
import Box from '@material-ui/core/Box'

import Copyright from '../Copyright'

class Login extends Component {
  constructor(props) {
    super()
    this.state = {
      email: '',
      password: ''
    }
  }

  handleChange = changeHandler.bind(this);

  handleSubmit = (event) => {
      event.preventDefault()
      this.props.submitLogin(this.state);
  }

  render() {
    const { status, location, classes } = this.props

    if (status === 'LOGGED_IN') {
      console.log("redirecting from login")
      const { from } = location.state || { from: { pathname: '/' } }
      return <Redirect to={from} />
    }
    return (
      <div className={classes.content} >
      <ErrorMessage/>
      <Container component="main" maxWidth="xs">
        <div className={classes.toolbar} />
        <div className={classes.paper}>
          <Typography component="h1" variant="h5">
            Login
          </Typography>
          <form className={classes.form} onSubmit={this.handleSubmit}>
            <TextField
              onChange={this.handleChange}
              value={this.state.email}
              variant="filled"
              margin="normal"
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoFocus
            />

            <TextField
              onChange={this.handleChange}
              value={this.state.password}
              variant="filled"
              margin="normal"
              fullWidth
              id="password"
              label="Password"
              name="password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Login
            </Button>
          </form>
          <RouterLink to="/signup">
            {"Don't have an account? Sign Up"}
          </RouterLink>
        </div>
        <Box mt={8}>
          <Copyright />
        </Box>
      </Container>
      </div>
    )
  }
}

const mapStateToProps = ({ auth }) => ({
  status: auth.status
})

const mapDispatchToProps = (dispatch) => {
  return {
    submitLogin: user => dispatch(submitLogin(user))
  }
}

const useStyles = theme => ({
  paper: {
    //marginTop: theme.spacing(6),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },

  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(useStyles)(Login));
