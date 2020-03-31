import React from 'react'
import { connect } from 'react-redux'
import { mapPersonToProps } from './helpers/stateMappers'
import { Link as RouterLink } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Divider from '@material-ui/core/Divider'
import Hidden from '@material-ui/core/Hidden'
import UserDrawer from './UserDrawer'

const DrawerContents = ({ person, toggleMobileOpen, temporary }) => {
  const classes = useStyles()
  const handleMenuClick = event => {
    temporary && toggleMobileOpen(event)
  }

  return (
    <>
      <Hidden mdDown implementation="css" >
        <div className={classes.toolbar}/>
      </Hidden>
      <UserDrawer/>
      <Divider/>
      <List>
        <ListItem
          button onClick={handleMenuClick}
          component={RouterLink}
          to={`/people/${person.id}/connections`} >
            <ListItemText primary="Connections" />
        </ListItem>
        <ListItem button onClick={handleMenuClick}
          component={RouterLink}
          to={`/people/${person.id}/recipes`}>
            <ListItemText primary="Recipes" />
        </ListItem>
      </List>
    </>
  )
}

const useStyles = makeStyles(theme => ({
  toolbar: theme.mixins.toolbar,
}));

export default connect(mapPersonToProps)(DrawerContents)
