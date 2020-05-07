class Make < ApplicationRecord
  belongs_to :user
  belongs_to :recipe

  has_many :memories
end
