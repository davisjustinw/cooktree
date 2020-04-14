class User < ApplicationRecord
  include Rails.application.routes.url_helpers

  has_secure_password validations: false
  has_one_attached :avatar
  has_many :recipe_users
  has_many :recipes, through: :recipe_users

  has_many :connections
  has_many :relations, through: :connections

  validates :name, presence: true
  validates :email, uniqueness: true, allow_blank: true
  validates :email, format: { with: /[^\s]@[^\s]/,
    message: "must have an '@' symbol" }, allow_blank: true

  # need to custom validate email & password presence
  def avatar_url
    rails_blob_path(self.avatar, disposition: "attachment", only_path: true) if self.avatar.attached?
  end
end
