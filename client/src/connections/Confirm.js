import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import { connect } from 'react-redux'
import { submitTokenSignup, getTokenUser, handleUserChange } from '../stores/user/userActions'
import { handleConnectionChange } from '../stores/connection/connectionActions'
import { withRouter } from 'react-router'
import RedirectLoggedIn from '../redirects/RedirectLoggedIn'
import Typography from '@material-ui/core/Typography'
import AvatarUpload from './AvatarUpload'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Loading from '../shared/Loading'

class Confirm extends Component {
  componentDidMount() {
    const { token } = this.props.match.params
    console.log(`token: ${token}`)
    this.props.getTokenUser(token)
  }

  handleUserChange = ({ target }) => {
    this.props.handleUserChange({ name: target.name, value: target.value })
  }

  handleConnectionChange = ({ target }) => {
    this.props.handleConnectionChange({ name: target.name, value: target.value })
  }

  handleSubmit = event => {
      event.preventDefault()
      const { token, name, email, password, avatar_file } = this.props.user
      const { relation_id, relationship } = this.props.connection
      const data = new FormData()

      data.append('token', token)
      data.append('name', name)
      data.append('email', email)
      data.append('password', password)
      data.append('avatar_file', avatar_file)

      data.append('relation_id', relation_id)
      data.append('relationship', relationship)

      this.props.submitTokenSignup(data);
  }

  render() {
    const { errors, classes, user, connection } = this.props
    const { handleUserChange, handleConnectionChange, handleSubmit } = this
    if(!user.name || !connection.name){
      return <Loading/>
    } else {
      return (
        <>
          <RedirectLoggedIn/>
          <div className={classes.paper}>
            <Typography component="h1" variant="h5">
              Sign Up
            </Typography>

            <AvatarUpload
              handleChange={handleUserChange}
              avatar_file={user.avatar_file}
              avatar_url={user.avatar_url}
            />
            <form noValidate className={classes.form} onSubmit={handleSubmit}>
              <TextField
                onChange={handleUserChange}
                value={user.name}
                error={!!errors.user.name}
                helperText={errors.user.name}
                variant="filled"
                margin="normal"
                fullWidth
                id="name"
                label="Name"
                name="name"
                required
              />
              <TextField
                onChange={handleConnectionChange}
                value={connection.relationship}
                error={!!errors.connection.relationship}
                helperText={errors.connection.relationship}
                variant="filled"
                margin="normal"
                fullWidth
                id="relationship"
                label={`${connection.name} is your...`}
                name="relationship"
                required
              />

              <TextField
                onChange={handleUserChange}
                value={user.email}
                error={!!errors.user.email}
                helperText={errors.user.email}
                variant="filled"
                margin="normal"
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                type="email"
                required
              />

              <TextField
                onChange={handleUserChange}
                value={user.password}
                error={!!errors.user.password}
                helperText={errors.user.password}
                variant="filled"
                margin="normal"
                fullWidth
                id="password"
                label="Password"
                name="password"
                required
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.button}
              >
                Sign Up
              </Button>
            </form>
          </div>
        </>
      )
    } //end else
  }
}

const mapStateToProps = ({ error, user, connection }) => ({
  errors: error.validation_errors,
  user: user,
  connection: connection.current
})

const mapDispatchToProps = dispatch => ({
    submitTokenSignup: user => dispatch(submitTokenSignup(user)),
    getTokenUser: token => dispatch(getTokenUser(token)),
    handleUserChange: change => dispatch(handleUserChange(change)),
    handleConnectionChange: change => dispatch(handleConnectionChange(change))
})

const useStyles = theme => ({
  paper: {
    marginTop: theme.spacing(4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  button: {
    marginTop: theme.spacing(3),
  },
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(withStyles(useStyles)(Confirm)))
