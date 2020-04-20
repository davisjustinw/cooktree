import React, { useState } from 'react'
import { connect } from 'react-redux'
import { updateConnection } from '../stores/connection/connectionActions'
import { makeStyles } from '@material-ui/core/styles'
import { useFormInput } from '../helpers/form'
import { url, jsonPostHeader} from '../stores/helpers/fetchHelpers'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'

const InviteForm = ({ connection, toggleInvite, updateConnection }) => {
  const { relation } = connection
  const classes = useStyles()
  //const email = useFormInput('')
  const [email, setEmail] = useState('')

  const handleChange = event => {
      setEmail(event.target.value);
  }

  const sendInvitation = () => {
    const invitation = {
      id: connection.id,
      relation_attributes: {
        id: connection.relation.id,
        name: connection.relation.name,
        email: email
      }
    }
    console.log('fetching')
    fetch(`${url}/invite`, jsonPostHeader(invitation))
      .then(resp => resp.json())
      .then(jsonConnection => {
        updateConnection(jsonConnection)
        setEmail('')
        toggleInvite()
      })
      .catch((error) => {
        console.error('Fetch error', error)
      })
  }

  return (
    <div className={classes.form}>
      <TextField
        id={`${relation.id}Email`}
        value={email}
        onChange={handleChange}
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

const mapDispatchToProps = dispatch => ({
  updateConnection: connection => dispatch(updateConnection(connection))
})

export default connect(null, mapDispatchToProps)(InviteForm)
