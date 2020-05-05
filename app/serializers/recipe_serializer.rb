class RecipeSerializer < ActiveModel::Serializer
  attributes :id, :name, :makes

  def makes
    ActiveModel::SerializableResource.new(object.makes,  each_serializer: MakeSerializer)
  end

end
