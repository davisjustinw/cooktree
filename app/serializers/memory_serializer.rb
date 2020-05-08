class MemorySerializer < ActiveModel::Serializer
  attributes :id, :share, :photoUrl

  def photoUrl
    object.photo_url
  end

end
