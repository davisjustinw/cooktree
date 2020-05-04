class MakeSerializer < ActiveModel::Serializer
  attributes :id, :alias, :content, :cook

  def cook
    {
      id: object.cook.id,
      name: object.cook.name
    }
  end
end
