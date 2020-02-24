# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

u1 = User.create(email: 'one@two.com', password: 'password')
u2 = User.create(email: 'two@three.com', password: 'password')
u3 = User.create(email: 'three@four.com', password: 'password')
u4 = User.create(email: 'four@five.com', password: 'password')

r1 = Recipe.create(name: 'sloppy joes')
r2 = Recipe.create(name: 'tri-tip')
r3 = Recipe.create(name: 'salad')
r4 = Recipe.create(name: 'fruitcake')

RecipeUser.create(recipe_id: r1.id, user_id: u1.id, role: "owner")
RecipeUser.create(recipe_id: r2.id, user_id: u2.id, role: "owner")
RecipeUser.create(recipe_id: r3.id, user_id: u3.id, role: "owner")
RecipeUser.create(recipe_id: r4.id, user_id: u4.id, role: "owner")
RecipeUser.create(recipe_id: r1.id, user_id: u1.id, role: "owner")
