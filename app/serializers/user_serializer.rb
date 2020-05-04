class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :avatarUrl

  def avatarUrl
    object.avatar_url
  end
  
end
