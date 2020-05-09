class MemorySerializer < ActiveModel::Serializer
  attributes :id, :share, :photoUrl, :user, :updatedAt

  def photoUrl
    object.photo_url
  end

  def user
    ActiveModel::SerializableResource.new(object.user,  serializer: UserSerializer)
  end

  def updatedAt
    object.updated_at.strftime('%b %d %Y %l:%m%P')
  end

end
