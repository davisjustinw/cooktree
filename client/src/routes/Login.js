import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom';

import { changeHandler } from '../handlers/form'
import { submitLogin } from '../actions/auth'

import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import Container from '@material-ui/core/Container'
import Button from '@material-ui/core/Button'

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
    const { redirectToReferrer, location, classes } = this.props

    if (redirectToReferrer === true) {
      const { from } = location.state || { from: { pathname: '/' } }
      return <Redirect to={from} />
    }
    return (
      <Container component="main" maxWidth="xs">
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
        </div>
      </Container>
    )
  }
}

const mapStateToProps = ({ auth }) => ({
  redirectToReferrer: auth.redirectToReferrer
})

const mapDispatchToProps = (dispatch) => {
  return {
    submitLogin: user => dispatch(submitLogin(user))
  }
}

const useStyles = theme => ({
  paper: {
    marginTop: theme.spacing(8),
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
});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(useStyles)(Login));
