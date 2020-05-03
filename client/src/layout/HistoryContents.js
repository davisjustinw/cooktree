import React from 'react'
import { connect } from 'react-redux'
import { mapUserToProps } from '../stores/mappers'
import { Link as RouterLink } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

import Hidden from '@material-ui/core/Hidden'

const HistoryContents = ({ makes, recipe, toggleHistoryOpen, temporary }) => {
  const classes = useStyles()
  const handleHistoryClick = event => {
    temporary && toggleHistoryOpen(event)
  }

  return (
    <>
      <Hidden mdDown implementation="css" >
        <div className={classes.toolbar}/>
      </Hidden>

      <List>

        {
          makes.map(make => {
            return (
              <ListItem
                key={`history-make-${make.id}`}
                button onClick={handleHistoryClick}
                component={RouterLink}
                to={`/recipes/${recipe.id}/makes/${make.id}`} >
                  <ListItemText primary={make.alias} />
              </ListItem>
            )
          })
        }

      </List>
    </>
  )
}

const useStyles = makeStyles(theme => ({
  toolbar: theme.mixins.toolbar,
}));

const mapStateToProps = ({ make, recipe }) => ({
  recipe: recipe.current,
  makes: make.list
})

export default connect(mapStateToProps)(HistoryContents)
