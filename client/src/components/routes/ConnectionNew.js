import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { useFormInput } from '../../handlers/form'

import { connect } from 'react-redux'
import { postConnection } from '../../actions/requesters'

import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import ScatterPlotIcon from '@material-ui/icons/ScatterPlot'
import Avatar from '@material-ui/core/Avatar'
import FileUpload from '../FileUpload'

const ConnectionNew = ({ errors, postConnection }) => {
  const classes = useStyles()
  const name = useFormInput('')
  const relationship = useFormInput('')

  const [avatar, setAvatar] = useState('')
  const [fileName, setFileName] = useState('')
  const [fileUrl, setFileURL] = useState(null)

  const handleFileChange = ({ target }) => {
    const file = target.files[0]
    setAvatar(file)
    setFileName(target.value.split( '\\' ).pop())
    setFileURL(URL.createObjectURL(file))
  }

  const handleSubmit = event => {
      console.log('submit')
      event.preventDefault()
      const data = new FormData()

      data.append('name', name.value)
      data.append('avatar', avatar.value)
      console.log(data)
      postConnection(data);
  }

  return (
      <>
        <div className={classes.paper}>
          <Typography component="h1" variant="h5">
            Add Person
          </Typography>
          <Avatar
            alt={fileName || 'avatar'}
            src={fileUrl}
            className={classes.avatar}
          >
            <ScatterPlotIcon />
          </Avatar>
          <form noValidate className={classes.form} onSubmit={handleSubmit}>
            <TextField
              {...name}
              error={!!errors.person.name}
              helperText={errors.person.name}
              variant="filled"
              margin="normal"
              fullWidth
              id="name"
              label="Name"
              name="name"
              autoFocus
              required
            />

            <TextField
              {...relationship}
              error={!!errors.connection.relationship}
              helperText={errors.connection.relationship}
              variant="filled"
              margin="normal"
              fullWidth
              id="relationship"
              label="Relationship"
              name="relationship"
              autoFocus
              required
            />

            <FileUpload
              handleFileChange={handleFileChange}
              id="avatar"
              name="avatar"
              file={{ name: fileName, url: fileUrl }}
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

const useStyles = makeStyles(theme => ({
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
}));

const mapStateToProps = ({ error }) => ({
  errors: error.validation_errors
})

const mapDispatchToProps = dispatch => ({
    postConnection: connectionData => dispatch(postConnection(connectionData))
})

export default connect(mapStateToProps, mapDispatchToProps)(ConnectionNew);
