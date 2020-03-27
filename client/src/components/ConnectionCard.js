import React from 'react'
import Avatar from '@material-ui/core/Avatar'
import CardHeader from '@material-ui/core/CardHeader'
import { Link as RouterLink } from 'react-router-dom'
import ScatterPlotIcon from '@material-ui/icons/ScatterPlot'
import { url } from '../actions/fetchHelpers'

const ConnectionCard = ({ avatar_url, name, relationship, id }) => {

  return (
    <CardHeader
      component={RouterLink}
      to={`/connections/${id}`}
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
  )
}

export default ConnectionCard
