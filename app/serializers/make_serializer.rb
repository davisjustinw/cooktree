class MakeSerializer < ActiveModel::Serializer
  attributes :id, :alias, :content, :cook

  def cook
    ActiveModel::SerializableResource.new(object.user, serializer: UserSerializer)
  end
end
