class Recipe < ApplicationRecord
  has_many :recipe_users
  has_many :users, through: :recipe_users
end
