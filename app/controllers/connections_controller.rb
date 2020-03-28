class ConnectionsController < ApplicationController
  include ErrorMessage

  def index
    if logged_in?
      person = Person.find_by(id: params[:person_id])
      connections = person.connections
      render json: connections.to_json(
        only: [:id, :relationship],
        include: {
          relation: {
            only: [:name, :id, :avatar_url],
            methods: [:avatar_url]}
        }
      ), status: :ok
    else
      render login_required
    end
  end

  def show
    if logged_in?
      connection = Connection.find_by(id: params[:id])

      render json: connection.to_json(
        only: [:id, :relationship],
        include: {
          relation: {
            only: [:name, :id, :avatar_url],
            methods: [:avatar_url]}
        }
      ), status: :ok
    else
      render login_required
    end
  end
end
