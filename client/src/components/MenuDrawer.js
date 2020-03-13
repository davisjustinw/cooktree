import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import Divider from '@material-ui/core/Divider'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Hidden from '@material-ui/core/Hidden'

const MenuDrawer = ({ mobileOpen, handleDrawerToggle, drawerWidth }) => {

  const classes = makeStyles(theme => ({
    drawer: {
      [theme.breakpoints.up('lg')]: {
        width: drawerWidth,
        flexShrink: 0,
      }
    },
    drawerPaper: {
      width: drawerWidth,
    },
    toolbar: theme.mixins.toolbar
  }))();

  const drawer = (
    <>
      <div className={classes.toolbar} />
      <Divider />
      <List>
        <ListItem button key="Connections">
          <ListItemText primary="Connections" />
        </ListItem>
        <ListItem button key="Recipes">
          <ListItemText primary="Recipes" />
        </ListItem>
      </List>
    </>
  )

  return (
    <nav className={classes.drawer} >
      <Hidden lgUp implementation="css">
        <Drawer
          variant="temporary"
          anchor='left'
          open={mobileOpen}
          onClose={handleDrawerToggle}
          classes={{
            paper: classes.drawerPaper,
          }}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
        >
          {drawer}
        </Drawer>
      </Hidden>
      <Hidden mdDown implementation="css">
        <Drawer
          classes={{
            paper: classes.drawerPaper,
          }}
          variant="permanent"
          open
        >
          {drawer}
        </Drawer>
      </Hidden>
    </nav>
  )
}

export default MenuDrawer
