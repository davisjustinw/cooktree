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

has_many memories
has_many users through memories

### Memory
 * photo
 * share

belongs_to Make
belongs_to User
has_many participants class_name user

### Connection
  belongs_to User
  belongs_to Relation class_name: Relation
