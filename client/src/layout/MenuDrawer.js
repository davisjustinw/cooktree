import React from 'react'
import { connect } from 'react-redux'

import { mapUiToProps } from '../stores/mappers'
import { toggleMenuOpen } from '../stores/ui/uiActions'

import Drawer from '@material-ui/core/Drawer'
import Hidden from '@material-ui/core/Hidden'
import MenuContents from './MenuContents'

const MenuDrawer = ({ menuOpen, toggleMenuOpen }) => {

  return (
    <nav >
      <Hidden mdUp implementation="css">
        <Drawer
          variant="temporary"
          anchor='left'
          open={menuOpen}
          onClose={toggleMenuOpen}

          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
        >
          <MenuContents toggleMenuOpen={toggleMenuOpen} temporary />
        </Drawer>
      </Hidden>
      <Hidden smDown implementation="css">
        <Drawer variant="permanent" open >
          <MenuContents toggleMenuOpen={toggleMenuOpen} />
        </Drawer>
      </Hidden>
    </nav>
  )
}



export default connect(mapUiToProps, { toggleMenuOpen })(MenuDrawer)
