class Memory < ApplicationRecord
  include Rails.application.routes.url_helpers

  belongs_to :make
  belongs_to :user
  has_one_attached :photo_file
  # after mvp
  #has_many :participants, class_name: 'User'

  def photo_url
    
    if self.photo_file.attached?
      rails_blob_path(self.photo_file, disposition: "attachment", only_path: true)
    end
  end
end
