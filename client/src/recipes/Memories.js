import React, { Component } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { url } from '../stores/helpers/fetchHelpers'
import Typography from '@material-ui/core/Typography'
import Loading from '../shared/Loading'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'

const Memories = ({ memories }) => {
  const classes = useStyles()
  if(memories){
    return (
      <div className={classes.root}>
        <GridList className={classes.GridList}>
        {
          memories.map(memory => {
            return (
              <GridListTile key={memory.id} cols={1}>
                <img src={`${url}${memory.photoUrl}`} alt={memory.id} />
              </GridListTile>
            )
          })
        }
        </GridList >
      </div>
    )
  } else {
    return <Loading/>
  }
}

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    //width: 500,
    //height: 450,
  },
}))


export default Memories
