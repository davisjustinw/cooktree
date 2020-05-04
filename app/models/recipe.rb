class Recipe < ApplicationRecord
  has_many :makes
  has_many :cooks, through: :makes, class_name: 'User'
end
