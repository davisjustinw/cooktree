import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const Recipes = props => {
  console.log('recipes route')
  const classes = makeStyles(theme => ({
    toolbar: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
  }))();

  return (
    <>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <h2>Recipes</h2>
      </main>
    </>
  )
}

export default Recipes
