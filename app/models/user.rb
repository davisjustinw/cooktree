class User < ApplicationRecord
  include Rails.application.routes.url_helpers

  has_secure_password validations: false
  has_one_attached :avatar_file

  has_many :makes
  has_many :memories
  has_many :recipes, -> { distinct }, through: :makes

  has_many :connections
  has_many :relations, through: :connections

  validates :name, presence: true
  validates :email, uniqueness: true, allow_blank: true
  validates :email, format: { with: /[^\s]@[^\s]/,
    message: "must have an '@' symbol" }, allow_blank: true

  #status: NO_INVITE, INVITED, CONFIRMED
  # need to validate email & password presence on signup but not add connection
  def avatar_url
    if self.avatar_file.attached?
      rails_blob_path(self.avatar_file, disposition: "attachment", only_path: true)
    end
  end

  # for seeding valid usable passwords
  def self.digest(string)
    cost = ActiveModel::SecurePassword.min_cost ? BCrypt::Engine::MIN_COST :
                                                  BCrypt::Engine.cost
    BCrypt::Password.create(string, cost: cost)
  end

  def all_recipes
    # User.recipes

    Recipe.joins(:users).where(users: { id: family }).distinct.pluck(:id)
    # Recipes for all connections
    # family all current user and all connections users
  end

  def family
    [self.id] + self.relations.pluck(:id)
  end

end
