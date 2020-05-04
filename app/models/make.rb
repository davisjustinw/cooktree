class Make < ApplicationRecord
  belongs_to :cook, class_name: 'User'
  belongs_to :recipe
end
