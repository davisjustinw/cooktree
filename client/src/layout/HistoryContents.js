import React from 'react'
import { connect } from 'react-redux'
import { mapUserToProps } from '../stores/mappers'
import { Link as RouterLink } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

import Hidden from '@material-ui/core/Hidden'

const HistoryContents = ({ id, toggleHistoryOpen, temporary }) => {
  const classes = useStyles()
  const handleMenuClick = event => {
    temporary && toggleHistoryOpen(event)
  }

  return (
    <>
      <Hidden mdDown implementation="css" >
        <div className={classes.toolbar}/>
      </Hidden>

      <List>
        <ListItem
          button onClick={handleMenuClick}
          component={RouterLink}
          to={`/users/${id}/connections`} >
            <ListItemText primary="Make1" />
        </ListItem>
        <ListItem button onClick={handleMenuClick}
          component={RouterLink}
          to={`/users/${id}/recipes`}>
            <ListItemText primary="Make2" />
        </ListItem>
      </List>
    </>
  )
}

const useStyles = makeStyles(theme => ({
  toolbar: theme.mixins.toolbar,
}));

export default connect(mapUserToProps)(HistoryContents)
