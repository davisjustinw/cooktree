class ConnectionSerializer < ActiveModel::Serializer
  attributes :id, :relationship, :relation

  def relation
    {
      id: object.relation.id,
      name: object.relation.name,
      status: object.relation.status,
      email: object.relation.email,
      avatarUrl: object.relation.avatar_url
    }
  end

end
