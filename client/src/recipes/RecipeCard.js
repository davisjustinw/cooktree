import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { useRouteMatch } from 'react-router-dom'

import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import VisibilityIcon from '@material-ui/icons/Visibility'
import IconButton from '@material-ui/core/IconButton'

const RecipeCard = ({ recipe }) => {
  const { id, name } = recipe

  const match = useRouteMatch('/users/:id')

  return (
    <Card variant='outlined' >
      <CardHeader
        title={name}
        action={
          <>
            <IconButton
              component={RouterLink}
              to={`${match.url}/recipes/${id}`}
            >
              <VisibilityIcon />
            </IconButton>
          </>
        }
      />
    </Card>
  )
}

export default RecipeCard
