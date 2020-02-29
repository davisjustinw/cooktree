class User < ApplicationRecord
  has_secure_password
  validates :email, uniqueness: true 
  has_many :recipe_users
  has_many :recipes, through: :recipe_users
end
