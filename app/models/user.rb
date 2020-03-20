class User < ApplicationRecord
  has_secure_password
  belongs_to :person
  accepts_nested_attributes_for :person
  validates :email, :password, presence: true
  validates :email, uniqueness: true
  validates :email, format: { with: /[^\s]@[^\s]/,
    message: "must have an '@' symbol" }, allow_blank: true
end
