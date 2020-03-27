import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import Hidden from '@material-ui/core/Hidden'
import DrawerContents from './DrawerContents'

const MenuDrawer = ({ mobileOpen, toggleMobileOpen }) => {
  const classes = useStyles()

  return (
    <nav className={classes.drawer} >
      <Hidden lgUp implementation="css">
        <Drawer
          variant="temporary"
          anchor='left'
          open={mobileOpen}
          onClose={toggleMobileOpen}

          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
        >
          <DrawerContents toggleMobileOpen={toggleMobileOpen} temporary />
        </Drawer>
      </Hidden>
      <Hidden mdDown implementation="css">
        <Drawer
          variant="permanent"
          open
        >
          <DrawerContents toggleMobileOpen={toggleMobileOpen} />
        </Drawer>
      </Hidden>
    </nav>
  )

}

const useStyles = makeStyles(theme => ({
  drawer: {
    [theme.breakpoints.up('lg')]: {
      width: 240,
      flexShrink: 0,
    }
  },
  toolbar: theme.mixins.toolbar,
}));

export default MenuDrawer
