import React, { Component } from 'react'
import Typography from '@material-ui/core/Typography'
import Loading from '../shared/Loading'

const Memories = ({ memories }) => {

  if(memories){
    return (
      <>
        {
          memories.map(memory => {
            return (
              <Typography variant='body1'>
                {memory.share}
              </Typography>
            )
          })
        }
      </>
    )
  } else {
    return <Loading/>
  }
}


export default Memories
