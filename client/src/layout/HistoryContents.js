import React from 'react'
import { connect } from 'react-redux'
import { changeCurrentMake } from '../stores/recipe/makeActions'
import { makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

import Hidden from '@material-ui/core/Hidden'

const HistoryContents =
  ({ makes, recipe, toggleHistoryOpen, temporary, changeCurrentMake }) => {

  const classes = useStyles()

  const handleHistoryClick = (id, event) => {
    changeCurrentMake(id)
    //temporary && toggleHistoryOpen()
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
                key={make.id}
                button onClick={e => handleHistoryClick(make.id, e)}
              >
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

const mapDispatchToProps = dispatch => ({
  changeCurrentMake: id => dispatch(changeCurrentMake(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(HistoryContents)
