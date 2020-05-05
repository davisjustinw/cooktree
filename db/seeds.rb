include Rails.application.routes.url_helpers
require 'open-uri'
require 'faker'

# Faker::Food.description #=> "Three eggs with cilantro, tomatoes, onions, avocados and melted Emmental cheese. With a side of roasted potatoes, and your choice of toast or croissant."
# Faker::Food.dish #=> "Caesar Salad"
# Faker::Food.fruits #=> "Peaches"
# Faker::Food.ingredient #=> "Adzuki Beans"
# Faker::Food.measurement #=> "1/4 tablespoon"
# Faker::Food.metric_measurement #=> "centiliter"
# Faker::Food.spice #=> "Caraway Seed"
# Faker::Food.sushi #=> "Sea bream"
# Faker::Food.vegetables #=> "Broccolini"
def make_dish
  num = [3,5,7,9]
  dish = "#{Faker::Hipster.paragraph}\n\n"
  num.sample.times do
    dish += "#{Faker::Food.measurement} #{Faker::Food.ingredient}\n"
  end
  dish
end

def get_avatar(name)
  open("https://api.adorable.io/avatars/60/#{name}.png")
end

def get_status
  stati = ["NO_INVITE", "INVITED", "CONFIRMED"]
  stati.sample
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

heros = [moot]

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

  heros.push u

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

recipe = Recipe.create(
  name: Faker::Hipster.sentence(word_count: 2, supplemental: true)
)
7.times do
  recipe.makes.create(
    alias: "#{Faker::Hipster.word} #{Faker::Food.ingredient}",
    user: heros.sample,
    content: make_dish
  )
end

recipe.makes.create(
  alias: "#{Faker::Hipster.word} #{Faker::Food.ingredient}",
  user: heros[0],
  content: make_dish
)


#moot.connections.create relation: p, relationship: Faker::Relationship.familial
