## Models

### User
  * name
  * email
  * avatar
  * password

has_many makes

### Recipe
  has_many make_users
  has_many makes through make_users

### Make_User
  * role
  belongs_to user
  belongs_to make
  
### Makes
- alias
- date time
initial make is the pioneering user?
belongs_to user
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

### Connection
  belongs_to User
  belongs_to Relation class_name: Relation
