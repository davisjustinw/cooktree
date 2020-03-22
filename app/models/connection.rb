class Connection < ApplicationRecord
  belongs_to :person
  belongs_to :relation, class_name: 'User'
end
