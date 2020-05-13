class MakeSerializer < ActiveModel::Serializer
  attributes :id, :recipeId, :alias, :content, :cook, :updatedAt

  def recipeId
    object.recipe_id
  end
  
  def cook
    ActiveModel::SerializableResource.new(object.user, serializer: UserSerializer)
  end

  def updatedAt
    object.updated_at.strftime('%b %d %Y %l:%m%P')
  end

end
