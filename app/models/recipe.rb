class Recipe < ApplicationRecord
  has_many :makes
  has_many :users, through: :makes
  has_many :memories, through: :makes

  scope :authorized, ->(user) do
    joins(:users).where(users: { id: user.family }).distinct
  end
end
