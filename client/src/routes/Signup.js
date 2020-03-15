import React, { Component } from 'react'
import { changeHandler } from '../handlers/form'
import { connect } from 'react-redux'
import { submitSignup } from '../actions/auth'

import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import Container from '@material-ui/core/Container'
import Button from '@material-ui/core/Button'
import Input from '@material-ui/core/Input'
import PublishIcon from '@material-ui/icons/Publish'
import ScatterPlotIcon from '@material-ui/icons/ScatterPlot'
import Avatar from '@material-ui/core/Avatar'

class Signup extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: '',
      fileName: '',
      file: null
    }
  }

  handleChange = changeHandler.bind(this);

  handleFileChange = event => {
    this.setState({
      fileName: event.target.value.split( '\\' ).pop(),
      file: URL.createObjectURL(event.target.files[0])
    })
  }

  handleSubmit = event => {
      event.preventDefault()
      this.props.submitSignup(this.state);
  }

  render() {
    const { classes } = this.props
    return (
      <Container component="main" maxWidth="xs">
        <div className={classes.toolbar} />
        <div className={classes.paper}>
          <Typography component="h1" variant="h5">
            Sign Up
          </Typography>
          <Avatar
            alt={this.state.fileName || 'avatar'}
            src={this.state.file}
            className={classes.avatar}
          >
            <ScatterPlotIcon />
          </Avatar>
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

            <input
              onChange={this.handleFileChange}
              accept="image/*"
              className={classes.input}
              id="avatar"
              name="file"
              type="file"
            />
            <label htmlFor="avatar">
              <Button
                variant="contained"
                color="primary"
                component='span'
                fullWidth
                className={classes.button}
              >
                <PublishIcon className={classes.publishIcon}/>
                { this.state.fileName || 'Upload avatar' }
              </Button>
            </label>
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
      </Container>

    )
  }
}

const useStyles = theme => ({
  publishIcon: {
    marginRight: theme.spacing(1)
  },
  avatar: {
    marginTop: theme.spacing(1),
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
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
  button: {
    margin: theme.spacing(3, 0, 2),
  },
  toolbar: theme.mixins.toolbar,
  input: {
    display: 'none'
  }
});

const mapDispatchToProps = dispatch => ({
    submitSignup: user => dispatch(submitSignup(user))
})

export default connect(null, mapDispatchToProps)(withStyles(useStyles)(Signup));
