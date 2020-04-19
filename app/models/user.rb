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

  #status: NO_INVITE, INVITED, CONFIRMED
  # need to validate email & password presence on signup but not add connection
  def avatar_url
    if self.avatar.attached?
      rails_blob_path(self.avatar, disposition: "attachment", only_path: true)
    end
  end

  def invitation(from:)
    puts "invitation: to #{self.name}, #{self.email}"
    UserMailer.invitation(self, from).deliver_now
    self.status = "INVITED"
    self.save
  end

end
