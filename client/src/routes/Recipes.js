import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const Recipes = props => {
  const classes = useStyles()

  return (
    <>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <h2>Recipes</h2>
      </main>
    </>
  )
}

// STYLES
const useStyles = makeStyles(theme => ({
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export default Recipes
