class Person < ApplicationRecord
  include Rails.application.routes.url_helpers

  has_one :user
  has_one_attached :avatar
  validates :name, presence: true
  has_many :recipe_people
  has_many :recipes, through: :recipe_people

  has_many :connections
  has_many :relations, through: :connections


  def avatar_url
    rails_blob_path(self.avatar, disposition: "attachment", only_path: true) if self.avatar.attached?
  end
end
