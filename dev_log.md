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

# 5-9 March

[x] Refine User Stories
[x] Brainstorm UX, Components, Pages
[x] Brainstorm Models

# 10 March
[x] navbar
[x] authbutton for navbar
[x] styling for signup and login

# 11 March
[x] signup link for login page
[x] clean up state for auth update private routes
[x] tabbar with routing capability
[x] add history button
[x] add search bar

# 12 March
[x] add menu to left nav button
[x] make menu drawer responsive
[x] add components, recipes buttons to left drawer

* add login info to left sheet

# 13 March
[x] hide controls at login and signup routes
[x] page content for recipes adjusting to fixed drawer
   [x] adding control state to router to control drawer and route state
[x] hide menu icon when drawer out

# 14 March

[x] add log out to menuitem
  [x] avatar
  [x] username
  [x] logout
[x] get rid of drawer toolbar spacer in mobile
[x] hide controls on login/signup

# 15 March
[x] add ability to upload avatar
  [x] upload
  [x] show uploaded
  [x] submit to server
[x] wire up
  [x] add user migration
    [x] avatar image
    [x] username
* add user edit route
[x] keyboard accessible upload button

# 16 March
[x] fix direct navigation is logging user out
[x] block direct route to login and signup when logged in
[x] remove exteraneous redirect to referrer

# 18 March
[x] add Person
[x] update login for split between Person and User


# 19 March
[x] message for login failure
[x] weird pending request on login auth.js:15
[x] serialize session

# 20 March
[x] validations on user signup
  [x] email is email format
  [x] email not taken
  [x] username not taken
  [x] password present

  [x] if no avatar add avatar based on username

# 21 March
  [x] fix links in nav drawer for connections and recipes

# 22 March
  [x] close drawer on nav link click

# 23 March
  [x] connection card

# 24 March
  [x] fake data for People
  [x] connections index route

# 25 March
  [x] get connections useEffect

# 26 March
  [x] connection avatar solution  
  [x] list connections on connections route page

# 27 March
  [x] ComponentCard styling
  [x] connections
    [x] index
    [x] show splash page

# 28 March
  [x] add connection on connections page
  [x] restructured private routes to deal with nesting
  [x] instead of connections?person_id=n /people/n/connections

# 29 March
  [x] Create redirect private component

* fix logout signup redirects

* root redirect  
* nav components in people Component
* invitation
* re-write Login to functional component with useState
* might need a check in login for authorized from
* current_user method in two places (ApplicationController and record)
* list recipes and contributions on connection show page

* clear error when routing to new page

# User Stories
[x] User can sign up
[x] User can login and Logout
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

[x] Users are People
[x] People don't have to be users
* People connect to Recipes
* People may connect to other people
* Connections have meta data (ate, cooked etc)

* User can step through different makes of a Recipe.
* User can make a new iteration of a Recipe.
* User can iterate off any make of a Recipe.
* User can see who made a specific version of a Recipe.
* Memories can be connected to a specific make of a Recipe signaling an event like a holiday.
