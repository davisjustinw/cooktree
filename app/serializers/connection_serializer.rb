class ConnectionSerializer < ActiveModel::Serializer
  attributes :id, :relationship, :relation, :relation_recipes

  def relation
    {
      id: object.relation.id,
      name: object.relation.name,
      status: object.relation.status,
      email: object.relation.email,
      avatarUrl: object.relation.avatar_url
    }
  end

  def relation_recipes
    ActiveModel::SerializableResource.new(object.relation.recipes,  each_serializer: RecipeSimpleSerializer)
  end

end
