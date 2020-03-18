class RecipePerson < ApplicationRecord
  belongs_to :recipe
  belongs_to :person
end
