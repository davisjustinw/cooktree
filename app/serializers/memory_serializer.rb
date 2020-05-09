class MemorySerializer < ActiveModel::Serializer
  attributes :id, :share, :photoUrl, :user

  def photoUrl
    object.photo_url
  end

  def user
    ActiveModel::SerializableResource.new(object.user,  serializer: UserSerializer)
  end

end
