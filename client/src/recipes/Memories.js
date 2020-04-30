import React from 'react'
import Typography from '@material-ui/core/Typography'
import Memory from './Memory'

const Memories = () => {
  return (
    <>
      <Typography variant='h5' >Memories</Typography>
      <Memory/>
      <Memory/>
      <Memory/>
    </>
  )
}

export default Memories
