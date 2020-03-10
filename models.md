## Models

### Person
    * name
    * birthday
    * password
    * user?

has_many recipes

### Recipe
has_many steps
has_many ingredients through steps

### Step
belongs_to recipe

### Ingredient
belongs_to step

### Memory
belongs_to Recipe
belongs_to Person

### Connection
  has_many People
  belongs_to People
