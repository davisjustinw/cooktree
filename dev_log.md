# 3 March

[x] map state to app
[x] add loading component for get current user on component did mount

# 4 March

[x] Clean up logout function
[x] route to Recipes when login successful
[x] route to referrer after login
[cancel] Pull session check from private route and create separate HOC
[x] build login/logout w name switcher in navbar
[x] make logout a navlink

[x] fix so home page isn't sign up or refer to Recipes from home
* Styling?
Material UI

# User Stories
* User can sign up
* User can login and Logout
  - name
  - password
  - avatar
* User can search and invite people to their circle
* User can search Recipes
* User can search People and see Recipes they are connected to
* User can create a Recipe
  - Name
* User can add steps
* Steps contain
  - ingredients
  - tools
  - techniques (one or many)
  - photo
  - output (usable in later steps?)
* memories
  - quotes
  - photos
  - connections to people
* users can add memories to Recipes.

* Users are People
* People don't have to be users
* People connect to Recipes
* People may connect to other people
* Connections have meta data (ate, cooked etc)

* User can step through different makes of a Recipe.
* User can make a new iteration of a Recipe.
* User can iterate off any make of a Recipe.
* User can see who made a specific version of a Recipe.
* Memories can be connected to a specific make of a Recipe signaling an event like a holiday.


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


## Find or create (Person, Connection, Recipe, Ingredient)

## Models

### Person
    * name
    * birthday
    * password
    * user?

### Recipe

### Step

### Ingredient

### Equipment

### Action

### Memory

### Connection
  * Person Recipe
  * Person Person
  * Recipe Recipe?
