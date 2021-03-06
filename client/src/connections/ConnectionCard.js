import React, { useState } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { useRouteMatch } from 'react-router-dom'

import { url } from '../stores/helpers/fetchHelpers'
import Avatar from '@material-ui/core/Avatar'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardHeader from '@material-ui/core/CardHeader'
import CardActions from '@material-ui/core/CardActions'
import Collapse from '@material-ui/core/Collapse'
import Button from '@material-ui/core/Button'
import ScatterPlotIcon from '@material-ui/icons/ScatterPlot'

import InviteControl from './InviteControl'
import InviteForm from './InviteForm'

const ConnectionCard = ({ connection }) => {
  const { id, relation, relationship } = connection
  const { name, avatarUrl } = relation

  const match = useRouteMatch('/users/:id')
  const [expand, setExpand] = useState(false)

  const toggleInvite = () => {
    setExpand(!expand)
  }
  return (
    <Card variant='outlined' >
      <CardHeader
        avatar={
          <Avatar
            alt={name || 'avatar'}
            src={`${url}${avatarUrl}`}
          >
            {!avatarUrl ? <ScatterPlotIcon/> : null}
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
        <InviteControl
          toggleInvite={toggleInvite}
          expand={expand}
          user={relation}
        />

      </CardActions>
      <Collapse in={expand} timeout="auto">
        <CardContent>
          <InviteForm connection={connection} toggleInvite={toggleInvite}/>
        </CardContent>
      </Collapse>
    </Card>
  )
}

export default ConnectionCard
