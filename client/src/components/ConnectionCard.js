import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import { useRouteMatch } from 'react-router-dom'

import { url, jsonPostHeader} from '../stores/helpers/fetchHelpers'
import Avatar from '@material-ui/core/Avatar'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardActions from '@material-ui/core/CardActions'

import Button from '@material-ui/core/Button'
import ScatterPlotIcon from '@material-ui/icons/ScatterPlot'

const ConnectionCard = ({ avatar_url, name, relationship, personId, id }) => {
  const match = useRouteMatch('/people/:id')
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
    <Card variant='outlined' className={classes.root}>
      <CardHeader
        className={classes.anchor}
        avatar={
          <Avatar
            alt={name || 'avatar'}
            src={`${url}${avatar_url}`}
          >
            {!avatar_url ? <ScatterPlotIcon/> : null}
          </Avatar>
        }
        title={name}
        subheader={relationship}
      />
      <CardActions disableSpacing>
        <Button
          component={RouterLink}
          to={`${match.url}/connections/${id}`}
          size="small"
          color="primary"
        >
          View
        </Button>
        <Button onClick={sendInvitation} size="small" color="primary">
          Invite
        </Button>
      </CardActions>
    </Card>
  )
}

const useStyles = makeStyles(theme => ({
  anchor: {
    textDecoration: 'none',
    marginBottom: 0
  }
}))


export default ConnectionCard
