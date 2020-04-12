import React from 'react'
import { connect } from 'react-redux'
import { Link as RouterLink } from 'react-router-dom';
import { useFormInput } from '../helpers/form'
import { submitLogin } from '../stores/user/userActions'
import RedirectLoggedIn from '../redirects/RedirectLoggedIn'

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'


const Login = ({ submitLogin }) => {
  const classes = useStyles()
  const email = useFormInput('')
  const password = useFormInput('')

  const handleSubmit = event => {
      event.preventDefault()
      submitLogin({ email: email.value, password: password.value });
  }

  return (
    <>
      <RedirectLoggedIn/>
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <TextField
            {...email}
            variant="filled"
            margin="normal"
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoFocus
          />

          <TextField
            {...password}
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
    </>
  )
}

const mapDispatchToProps = (dispatch) => ({
  submitLogin: user => dispatch(submitLogin(user))
})

const useStyles = makeStyles(theme => ({
  paper: {
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
}))

export default connect(null, mapDispatchToProps)(Login);
