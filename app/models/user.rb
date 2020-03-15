class User < ApplicationRecord
  has_secure_password
  has_one_attached :avatar
  validates :email, uniqueness: true
  has_many :recipe_users
  has_many :recipes, through: :recipe_users
end
