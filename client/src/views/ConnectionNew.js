import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles'

import { changeHandler } from '../helpers/form'
import { postConnection } from '../stores/connection/connectionActions'

import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import FileUpload from '../components/FileUpload'
import { Redirect } from 'react-router-dom'
import ScatterPlotIcon from '@material-ui/icons/ScatterPlot'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'

class ConnectionNew extends Component {
  constructor() {
    super()
    this.state = {
      submitSuccess: false,
      name: '',
      relationship: '',
      file: {
        name: '',
        url: null
      },
      avatar: '',
    }
  }

  handleChange = changeHandler.bind(this);

  handleFileChange = ({ target }) => {
    const file = target.files[0]
    this.setState({
      avatar: file,
      file: {
        name: target.value.split( '\\' ).pop(),
        url: URL.createObjectURL(file)
      }
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    const { avatar, name, relationship } = this.state
    const data = new FormData()

    data.append('avatar', avatar)
    data.append('name', name)
    data.append('relationship', relationship)

    this.props.postConnection(data);
  }

  render() {
    const { handleChange, handleFileChange, handleSubmit } = this
    const { classes, errors, personId, submitSuccess } = this.props
    const { name, relationship, file } = this.state
    if (submitSuccess === true) {
      return <Redirect to={`/people/${personId}/connections`} />
    }
    return (
        <>
          <div className={classes.paper}>
            <Typography component="h1" variant="h5">
              Add Person
            </Typography>
            <Avatar
              alt={file.name || 'avatar'}
              src={file.url}
              className={classes.avatar}
            >
              <ScatterPlotIcon />
            </Avatar>
            <form noValidate className={classes.form} onSubmit={handleSubmit}>
              <TextField id="name"
                value={name}
                onChange={handleChange}
                error={!!errors.person.name}
                helperText={errors.person.name}
                variant="filled"
                margin="normal"
                fullWidth
                label="Name"
                name="name"
                autoFocus
                required
              />

              <TextField id="relationship"
                value={relationship}
                onChange={handleChange}
                error={!!errors.connection.relationship}
                helperText={errors.connection.relationship}
                variant="filled"
                margin="normal"
                fullWidth
                label="Relationship"
                name="relationship"
                required
              />

              <FileUpload id="avatar"
                handleFileChange={handleFileChange}
                name="avatar"
                file={{ name: file.name, url: file.url }}
                className={classes.button}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.button}
              >
                Add Connection
              </Button>
            </form>
          </div>
        </>
      )
  }

}

const useStyles = theme => ({
  avatar: {
    marginTop: theme.spacing(1),
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  paper: {
    marginTop: theme.spacing(4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  button: {
    marginTop: theme.spacing(3),
  },
})

const mapStateToProps = ({ error, user, connection }) => ({
  errors: error.validation_errors,
  personId: user.personId,
  submitSuccess: connection.submitSuccess
})

const mapDispatchToProps = dispatch => ({
    postConnection: formData => dispatch(postConnection(formData))
})

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(useStyles)(ConnectionNew))
