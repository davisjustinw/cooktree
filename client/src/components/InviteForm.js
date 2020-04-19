import React, { useState, createRef } from 'react'
import { useFormInput } from '../helpers/form'

import { fade, makeStyles } from '@material-ui/core/styles'
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined'
import InputBase from '@material-ui/core/InputBase'
import IconButton from '@material-ui/core/IconButton'
import InputAdornment from '@material-ui/core/InputAdornment'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Grow from '@material-ui/core/Grow'
import { url, jsonPostHeader} from '../stores/helpers/fetchHelpers'

const InviteForm = ({ user, toggleInvite }) => {
  const classes = useStyles()

  const sendInvitation = () => {
    const invitation = {
      invitation: { user: { email: 'yo@yo.com'}, sender: 'Mao' }
    }

    fetch(`${url}/invite`, jsonPostHeader(invitation))
      .then(resp => resp.json())
      .then(json => {
        console.log(json)
      })
      .catch((error) => {
        console.error('Fetch error', error)
      })
  }

  return (
    <div className={classes.form}>
      <TextField
        label="email"
        variant="outlined"
        size="small"
      />
      <Button
        variant="contained"
        size="medium"
        color="primary"
        className={classes.sendButton}
      >
        Send
      </Button>
    </div>
  )
}

const useStyles = makeStyles(theme => ({
  form: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  field:  {

  },
  sendButton: {
    marginLeft: theme.spacing(1)
  }
}))

export default InviteForm
