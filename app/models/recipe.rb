class Recipe < ApplicationRecord
  has_many :makes
  has_many :users, through: :makes
  has_many :memories, through: :makes

end
