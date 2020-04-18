import React from 'react'
import Button from '@material-ui/core/Button'
import { url, jsonPostHeader} from '../stores/helpers/fetchHelpers'

const InviteControl = ({ user }) => {
  const { email, status } = user
  //status: NO_INVITE, INVITED, CONFIRMED
  // NO_INVITE:
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

  switch(status) {
    case 'NO_INVITE':
      return (
        <Button onClick={sendInvitation} size="small" color="primary">
          Invite
        </Button>
      )
    case 'INVITED':
      return (
        <Button disabled size="small">
          Invited
        </Button>
      )
    case 'CONFIRMED':
    default:
      return null
  }
}

export default InviteControl
