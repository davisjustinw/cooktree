module Serializers
  def connection_json(connection)
    {
      json: connection.to_json(
        only: [:id, :relationship],
        include: {
          relation: {
            only: [:name, :id, :avatar_url],
            methods: [:avatar_url]}
        }
      ), status: :ok
    }
  end
end
