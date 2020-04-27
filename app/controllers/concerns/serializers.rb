module Serializers
  def user_json(user)
    avatar_url = ''
    if user.avatar_file.attached?
      avatar_url = rails_blob_path(user.avatar_file, only_path: true)
    end
    {
      json: {
        user: {
          id: user.id,
          name: user.name,
          email: user.email,
          avatar_url: avatar_url
        }
      },
      status: :ok
    }
  end

  def invitation_json(connection)
    user = connection.relation
    relation = connection.user
    avatar_url = ''
    if user.avatar_file.attached?
      avatar_url = rails_blob_path(user.avatar_file, only_path: true)
    end
    {
      json: {
        user: {
          id: user.id,
          name: user.name,
          email: user.email,
          avatar_url: avatar_url
        },
        connection: {
          relation: {
            id: relation.id,
            name: relation.name,
            avatar_url: relation.avatar_url
          }
        }
      },
      status: :ok
    }
  end

  def empty_user_json
    {
      json: {
        user: {
          email: '',
          id: '',
          name: '',
          avatar_url: ''
        }
      },
      status: :ok
    }
  end

  def connection_json(connection)
    {
      json: connection.to_json(
        only: [:id, :relationship],
        include: {
          relation: {
            only: [:name, :id, :avatar_url, :status, :email],
            methods: [:avatar_url]}
        }
      ), status: :ok
    }
  end


end
