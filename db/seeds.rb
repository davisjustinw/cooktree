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

def get_status
  stati = ["NO_INVITE", "INVITED", "CONFIRMED"]
  stati.sample
end

def create_connection

end

moot = User.new(
  name: 'moot',
  email: 'one@two.com',
  password_digest: User.digest('password'),
  status: "CONFIRMED"
)

avatar = get_avatar 'moot'
moot.avatar_file.attach io: avatar, filename: "moot.png"
moot.save


5.times do

  hero = {
    name: Faker::Ancient.hero,
    status: get_status
  }

  case hero[:status]
  when "NO_INVITE"
    if [true, false].sample
      hero[:password_digest] = User.digest('password')
      hero[:email] = Faker::Internet.email(name: hero[:name])
    end
  when "INVITED"
    hero[:email] = Faker::Internet.email(name: hero[:name])
  when "CONFIRMED"
    hero[:password_digest] = User.digest('password')
    hero[:email] = Faker::Internet.email(name: hero[:name])
  end

  puts "#{hero[:name]}"
  u = User.new
  u.attributes = hero
  avatar = get_avatar hero[:name]
  u.avatar_file.attach io: avatar, filename: "#{hero[:name]}.png"
  u.save

  case hero[:status]
  when "NO_INVITE"
    Connection.create user: moot, relation: u, relationship: Faker::Relationship.familial
  when "INVITED"
    Connection.create user: moot, relation: u, relationship: Faker::Relationship.familial
  when "CONFIRMED"
    Connection.create user: moot, relation: u, relationship: Faker::Relationship.familial
    Connection.create user: u, relation: moot, relationship: Faker::Relationship.familial
  end
  sleep 2
end

#moot.connections.create relation: p, relationship: Faker::Relationship.familial
