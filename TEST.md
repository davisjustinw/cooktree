Taiko and Jest
clear error when navigating away

# Signup
  [x] click signup link
    -> http://localhost:3000/signup

  !* nothing entered ->
    meaningful message
  !* avatar only ->
    field level error
  !* username, no email, no password ->
    field level error
  !* username, email, no password ->
    field level error
  !* username, no email, password ->
    field level error
  [x] no username, email, password ->
    field level error
  !* username, invalid email, password ->
    field level error
  !* duplicate username ->
    field level error
  !* duplicate email ->
    field level error
  !* valid username, valid email, none empty password ->
    -> http://localhost:3000/users/1/connections
    -> user should be able to logout then back in

# Login
  [x] nothing entered
    -> invalid credentials
  [x] valid username no password
    -> invalid credentials
  [x] invalid username no password
    -> invalid credentials
  [x] no username w password
    -> invalid credentials
  [x] valid username password
    -> http://localhost:3000/users/1/connections

# Protected Routes
[x] http://localhost:3000/users/1/connections no login
  -> http://localhost:3000/login
[x] http://localhost:3000/users/1/recipe no Login
  -> http://localhost:3000/login
[x] http://localhost:3000/recipes/8 for user not connected
  -> http://localhost:3000/users/1/recipes
[x] http://localhost:3000/users/1/connections/2 for user not connected
  -> http://localhost:3000/users/1/connections
[x] http://localhost:3000/users/1/connections logged in as user 2
  -> http://localhost:3000/users/2/connections
[x] http://localhost:3000/users/1/recipes logged in as user 2
  -> http://localhost:3000/users/2/recipes
