import { getRecipes } from '../handlers/recipe'

const RecipeButton = () => {
  return <button onClick={ getRecipes }>click me</button>
}

export default RecipeButton
