import React from 'react'
import { useRouteMatch } from 'react-router'
import Hidden from '@material-ui/core/Hidden'
import IconButton from '@material-ui/core/IconButton'
import HistoryIcon from '@material-ui/icons/History'

const HistoryButton = ({ toggleHistoryOpen }) => {
  const recipesMatch = useRouteMatch('/users/:id/recipes/:id')
  return (
    <>
      { recipesMatch ? (
        <Hidden lgUp implementation="css">
          <IconButton
            onClick={ toggleHistoryOpen }
            edge="start"
            color="inherit"
          >
            <HistoryIcon />
          </IconButton>
        </Hidden>
      ):(null)}
    </>
  )
}

export default HistoryButton
