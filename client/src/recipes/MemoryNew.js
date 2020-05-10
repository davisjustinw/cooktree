import React from 'react'
import { makeStyles } from '@material-ui/core/Styles'
import { url } from '../stores/helpers/fetchHelpers'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import CardActions from '@material-ui/core/CardActions'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import AddAPhotoOutlinedIcon from '@material-ui/icons/AddAPhotoOutlined'
import Loading from '../shared/Loading'
import PhotoUpload from './PhotoUpload'

const MemoryNew = ({ make, memory, handleMemoryChange }) => {
  const classes = useStyles()

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
            <Button size="small" color="primary">
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

export default MemoryNew
