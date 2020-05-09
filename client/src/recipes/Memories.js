import React, { Component } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { url } from '../stores/helpers/fetchHelpers'
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import CardHeader from '@material-ui/core/CardHeader'
import Typography from '@material-ui/core/Typography'
import Loading from '../shared/Loading'

import Carousel from 'react-material-ui-carousel'

const Memories = ({ memories }) => {
  const classes = useStyles()
  if(memories){
    return (
      <div className={classes.root}>
        <Carousel
          animation='slide'
          autoplay='true'
          interal='2000'
        >
        {
          memories.map(memory => {
            return (
              <Card key={memory.id}>
                  <CardMedia
                    component="img"
                    alt="memory"
                    height="240"
                    image={`${url}${memory.photoUrl}`}
                    title="memory"
                  />
                  <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                      {memory.share}
                    </Typography>
                  </CardContent>
                  <CardHeader
                    avatar={
                      <Avatar
                        alt={name || 'avatar'}
                        src={avatarUrl}
                      >
                        {!avatarUrl ? <ScatterPlotIcon/> : null}
                      </Avatar>
                    }
                    title={name}
                    subheader={email}
                  />
              </Card>
            )
          })
        }
        </Carousel >
      </div>
    )
  } else {
    return <Loading/>
  }
}

const useStyles = makeStyles(theme => ({
  root: {
    //display: 'flex',
    //flexWrap: 'wrap',
    //justifyContent: 'space-around',
    //overflow: 'hidden',
    //backgroundColor: theme.palette.background.paper,
    marginTop: theme.spacing(4),
    width: '100%'
  },

}))


export default Memories
