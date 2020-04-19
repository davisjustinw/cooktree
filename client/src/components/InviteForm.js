import React from 'react'
import { useFormInput } from '../helpers/form'

import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'

import { url, jsonPostHeader} from '../stores/helpers/fetchHelpers'

const InviteForm = ({ user, toggleInvite }) => {
  const classes = useStyles()
  const email = useFormInput('')

  const sendInvitation = () => {
    const invitation = {
      user: {
        email: email.value,
        id: user.id
      }
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
        {...email}
        id={`${user.id}Email`}
        name="email"
        label="email"
        variant="outlined"
        size="small"
      />
      <Button
        onClick={sendInvitation}
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
