# Views

## Signup - /signup

### Action
  * submit

### Nav
  * login

## Login - /login

### Action
  * submit

### Nav
  * signup


## Recipes - /recipes

### components
  * AppBar
  * RecipeList
  * RecipeCard
  * AddRecipe FAB

### Action
  * show recipe
  * add recipe
  * del recipe
  * search by recipe name, connection
  * logout

### Tabs
  * Connections
  * Recipes

## Recipe - /recipes/:id

### Components
  * AppBar (Converted?)
  * RightSheet
    * MakeList
    * MakeCard
  * MemoryBook
    * MemoryCard
  * TabBar
    * Tab
  * StepList
    * StepCard
      * IngredientList
        * Ingredient
      * StepAction

### Action
  * add/edit step
  * add/edit memory
  * add/edit make

### Tabs
  * Connections
  * Recipes

### Right Sheet
  * Makes

## Connections

### Components
  * AppBar
  * TabBar
    * Tab
  * ConnectionList
    * ConnectionCard
    * AddConnection FAB?

### Action
  * Add/Edit Connection (who is this person to me)
  * Show Connection

## Connection

### Components
  * AppBar (converted)
  * TabBar
    * Tab
  * RecipeList
    * RecipeCard
  * ConnectionList
    * ConnectionCard

### Actions
  * Add Recipe
  * Add Connection?
  * Invite User?
