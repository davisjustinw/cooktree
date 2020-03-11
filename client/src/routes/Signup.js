import React, { Component } from 'react'
import { changeHandler } from '../handlers/form'
import { connect } from 'react-redux'
import { submitSignup } from '../actions/auth'

import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import Container from '@material-ui/core/Container'
import Button from '@material-ui/core/Button'

class Signup extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: ''
    }
  }

  handleChange = changeHandler.bind(this);

  handleSubmit = event => {
      event.preventDefault()
      this.props.submitSignup(this.state);
  }

  render() {
    const { classes } = this.props
    return (
      <Container component="main" maxWidth="xs">
        <div className={classes.paper}>
          <Typography component="h1" variant="h5">
            Sign Up
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
              Sign Up
            </Button>
          </form>
        </div>
      </Container>

    )
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

const mapDispatchToProps = dispatch => ({
    submitSignup: user => dispatch(submitSignup(user))
})

export default connect(null, mapDispatchToProps)(withStyles(useStyles)(Signup));
