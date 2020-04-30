## Models

### User
  * name
  * email
  * avatar
  * password

has_many makes
has_many recipes through makes

has_many memories
### Recipe
  Name
  has_many makes
  has_many cooks through makes class_name :user

### Makes
- alias
- version name
- date time
belongs_to cook class_name :user
belongs_to recipe

initial memory is the note
has_many memories
has_many users through memories

has_many steps
has_many ingredient_summaries

### Step
  - action

has_many products class_name Ingredient
has_many ingredients
belongs_to make

### Step_Ingredient
  * amount (string? quantity and unit?)
  belongs_to step
  belongs_to Ingredient

### Ingredient_Summary
  * amount
  has_many step_ingredients
  belongs_to make

### Ingredient
  * name
  * scope (global, recipe)
has_many steps through step_ingredients

### Memory
 * photo
 * share

belongs_to Make
belongs_to User
has_many participants class_name user

### Connection
  belongs_to User
  belongs_to Relation class_name: Relation
