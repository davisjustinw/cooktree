class Recipe < ApplicationRecord
  has_many :recipe_people
  has_many :people, through: :recipe_people
end
