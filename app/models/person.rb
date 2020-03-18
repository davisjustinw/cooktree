class Person < ApplicationRecord
  has_one :user
  has_one_attached :avatar
  has_many :recipe_people
  has_many :recipes, through: :recipe_people
end
