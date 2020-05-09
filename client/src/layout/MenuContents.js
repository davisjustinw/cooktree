import React from 'react'
import { connect } from 'react-redux'
import { mapUserToProps } from '../stores/mappers'
import { Link as RouterLink } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Divider from '@material-ui/core/Divider'
import Hidden from '@material-ui/core/Hidden'
import UserDrawerHeader from './UserDrawerHeader'

const MenuContents = ({ id, toggleMenuOpen, temporary }) => {
  const classes = useStyles()
  const handleMenuClick = event => {
    temporary && toggleMenuOpen()
  }

  return (
    <>
      <Hidden smDown implementation="css" >
        <div className={classes.toolbar}/>
      </Hidden>
      <UserDrawerHeader/>
      <Divider/>
      <List>
        <ListItem
          button onClick={handleMenuClick}
          component={RouterLink}
          to={`/users/${id}/connections`} >
            <ListItemText primary="Connections" />
        </ListItem>
        <ListItem button onClick={handleMenuClick}
          component={RouterLink}
          to={`/users/${id}/recipes`}>
            <ListItemText primary="Recipes" />
        </ListItem>
      </List>
    </>
  )
}

const useStyles = makeStyles(theme => ({
  toolbar: theme.mixins.toolbar,
}));

export default connect(mapUserToProps)(MenuContents)
