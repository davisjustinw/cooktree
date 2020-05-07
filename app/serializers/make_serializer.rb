class MakeSerializer < ActiveModel::Serializer
  attributes :id, :alias, :content, :cook, :updatedAt

  def updatedAt
    object.updated_at.strftime('%b %d %Y %l:%m%P')
  end

  def cook
    ActiveModel::SerializableResource.new(object.user, serializer: UserSerializer)
  end
end
