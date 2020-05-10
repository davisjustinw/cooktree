import React from 'react'
import { makeStyles } from '@material-ui/core/Styles'
import { connect } from 'react-redux'
import { postMemory } from '../stores/memory/memoryActions'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'

import CardActions from '@material-ui/core/CardActions'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'

import PhotoUpload from './PhotoUpload'

const MemoryNew = ({ make, memory, handleMemoryChange, postMemory }) => {
  const classes = useStyles()

  const handlePostMemory = () => {
    const data = new FormData()

    data.append('make_id', make.id)
    data.append('photo_file', memory.photoFile)
    data.append('share', memory.share)

    postMemory(data);
  }

  return (
      <>
        <Card classes={{ root: classes.cardRoot }}>
          <CardContent >
            <PhotoUpload
              memory={memory}
              handleMemoryChange={handleMemoryChange}
            />

            <TextField
              classes={{
                root: classes.share
              }}
              id='content-field'
              placeholder='start typing...'
              name='share'
              value={memory.share}
              onChange={handleMemoryChange}
              multiline
              rows='3'
              rowsMax='100'
              fullWidth
              variant="outlined"
            />
          </CardContent >
          <CardActions >
            <Button
              onClick={handlePostMemory}
              size="small"
              color="primary"
            >
              Save
            </Button>
            <Button size="small" color="primary">
              Cancel
            </Button>

          </CardActions>
        </Card>

      </>
    )


}

const useStyles = makeStyles(theme => ({
  cardRoot: {
    width: '100%',
    marginTop: theme.spacing(2),
  },
  share: {
    marginTop: theme.spacing(2),
    '& fieldset': {
      border: 0
    }
  },

}))

const mapDispatchToProps = dispatch => ({
  postMemory: data => dispatch(postMemory(data))
})

export default connect(null, mapDispatchToProps)(MemoryNew)
