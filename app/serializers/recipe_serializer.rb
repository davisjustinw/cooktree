class RecipeSerializer < ActiveModel::Serializer
  attributes :id, :name, :makes, :memories

  def makes
    ActiveModel::SerializableResource.new(object.makes,  each_serializer: MakeSerializer)
  end

  def memories
    ActiveModel::SerializableResource.new(object.memories,  each_serializer: MemorySerializer)
  end

end
