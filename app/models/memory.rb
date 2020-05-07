class Memory < ApplicationRecord
  include Rails.application.routes.url_helpers
  
  belongs_to :make
  has_many :participants, class_name: 'User'
  has_one_attached :photo_file

  def photo_url
    if self.photo_file.attached?
      rails_blob_path(self.photo_file, disposition: "attachment", only_path: true)
    end
  end
end
