# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
include Rails.application.routes.url_helpers
require 'open-uri'
require 'faker'

def get_avatar(name)
  open("https://api.adorable.io/avatars/60/#{name}.png")
end

def get_faked_avatar(name)
  faked = Faker::Avatar.image(slug: name, size: '60x60')
  puts faked
  open(faked)
end

moot = Person.first

5.times do
  name = Faker::Ancient.hero
  puts name
  p = User.create name: name
  avatar = get_avatar name
  p.avatar.attach io: avatar, filename: "#{name}.png"
  moot.connections.create relation: p, relationship: Faker::Relationship.familial
  sleep 5
end
