class User < ApplicationRecord
  has_secure_password
  belongs_to :person
  accepts_nested_attributes_for :person
  validates :email, uniqueness: true
end
