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

# 30 March
  [x] fixed private route
  [x] logout redirects properly
  [x] signup redirects properly
  [x] login redirects properly
  [x] root redirect  
  [x] fix menu drawer

# 31 March
  [x] add connection
  [x] new connection form

# 5 April
  [x] wire new connection form to controller

# 6 April
  [x] connection show Page

# 11 April
  [x] fixed CORB with connection show page
  [x] current_user method in two places (ApplicationController and record)

# 12 April
  [x] emails sending with letter letter_opener
  [x] add dynamic data to emails
  [x] add front end driven data for emails
  [x] move upload button to avatar placeholder
  [x] add connection serializer

# 13 April
  [x] fix build relation in create connection controller
  [x] update add connection to add email and Invitation
  [x] fixed add connection button doesn't work after new connection

# 16 April
  [x] send invite to connections with email
  [x] set status to invited

# 18 April
  * invite control
    - no_invite:
      [x]. show invite button
      [x]. onClick show mini form for email
      -> onSubmit send invite change status to invited.

    [x] invited: show invited disabled button or chip
    [x] confirmed: show nothing

# 19 April
  [x] Fixed new connection with no invite is showing as invited
  [x] onSubmit send invite change status to invited.
  [x] refresh Connections after successful invite
  [x] close invite form after invite
  [x] make invitation button on connections status specific

# 20 April
  [x] add theme palette
  [x] new connection has option to invite
  [x] token url for invite signup

# 21 & 22 April
  [x] show/hide controls for protected routes
  [x] invitation signup url
    [x] redirects to signup screen?

# 24, 25 April
  [x] cancel on avatar upload bombs out
  [x] get tokenConnection return user in connection action
  [x] user placed in user state.  control form in user
  [x] invitation signup filled
    - route signup/:token
      - get token information
      - get connection from api
      - populate form
# 26 April
  [x] fix handleSubmit in Confirm component
  [x] post update with password
  [x] change status to confirmed
  [x] need connection complement created
    [x] add invite from confirm form
    [x] add relationship

# 27 April
  [x] seed with password
  [x] built out seeds
  [x] recipes and recipe stub component with proper routes
  [x] fixed old routing in drawer links
  [x] fix refresh issue
  [x] stubbed recipes view
  [x] started recipe store files

# 28 April
  [x] finish stubbing recipe store
  [x] Recipes View
    [x] Recipe

# 29 April
  [x] stubbed steps
  [x] pivoted to no steps.  Single rich text area for recipe.
    - Draft.js
    - list and prose mode
    - Fraction formatting
    - number in list (amount) sits left justified.  The rest tabs in

# 30 April - 1 May
  [x] SPIKE - research rich text area libraries
    - DraftJS/DraftJS plugins, Quill, Roll my own
    - Libraries overly complicated for limited benefit in this use case
    - research limited line based simple styling for recipe

# 2 May
  [x] pivot to single low pro text area with virtual feel of recipe card
    - user liked the simplicity.
  [x] RecipeCard with textarea and alias text field controled to local state
  [x] Recipe component with Name loaded from store
  [x] wire up Recipe to store
    - recipe name
    - makes
  [x] wired update button to store

# 3 May
  [x] History drawer
  [x] copyright to footer
  [x] list makes in history Drawer
  [x] wire make up to view
  [x] display history icon only on recipe routes
  [x] update only available if you are the user (hide update button)
  [x] recipe input in card remove border
  [x] add recipe and makes to seeds

# 4 May
  [x] add AMS serializer for cleaner serialization
  [x] error catching in login
  [x] wire up makes to api
    [x] get recipes
      [x] action
      [x] api route
    [x] get recipe
      [x] action
      [x] api route
  [x] listitem focus different color
  [x] wire updateMakeList to api

# 5 May
  * wire make new to store
  * wire make new to api
    - alias uniqness validation within recipe context
  [x] history icon sitting on left
  * on connection confirm, avatar not showing

  - update available if owner is an unconfirmed connection
  * history drawer styling
    - add avatar and maker name


  * dry up drawer components
  * hold state in component instead of store? use map list instead of current?

* fix signup validations (connection vs sign up)
* clear error when routing to new page
* add unsaved changes indicator
  - updated date?

* bad token redirect to login or signup
* need validations in create connection
* aka on a person
* check for connection
* refresh on connections gets stuck on loading after invite

* root flashes login before redirect
* can I stop weird flash on redirect on not logged in
* can I submit connection and return to connections without getConnections round trip
X nav components in people Component?
X re-write Login to functional component with useState
X might need a check in login for authorized from

* list recipes and contributions on connection show page
* what does authorization look like for different users


# User Stories
[x] User can sign up
[x] User can login and Logout
  - name
  - password
  - avatar
* User can search
[x] User can invite people to their circle
* User can search Recipes
* User can search People and see Recipes they are connected to
* User can create a Recipe
  - Name

* memories
  - quotes
  - photos
  - connections to people
* users can add memories to Recipes.

[x] Users don't have to be logged in users
[x] People connect to Recipes/makes
[x] People may connect to other people
* Connections have meta data (ate, cooked etc)

[x] User can step through different makes of a Recipe.
* User can make a new iteration of a Recipe.
* User can iterate off any make of a Recipe.
* User can see who made a specific version of a Recipe.
* Memories can be connected to a specific make of a Recipe signaling an event like a holiday.
