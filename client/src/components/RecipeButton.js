import React from 'react';
import { getRecipes } from '../handlers/recipe'

const RecipeButton = props => {
  return <button onClick={ getRecipes }>click me</button>
}

export default RecipeButton
