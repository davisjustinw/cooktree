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

  def create
    if logged_in?
      connection = Connection.new person: current_person, relationship: connection_params[:relationship]
      puts "connection made"
      puts connection.relationship
      connection.person.build person_params
      puts "person made"
      connection.save

      if connection.persisted?
        render json: connection.to_json(
          only: [:id, :relationship],
          include: {
            relation: {
              only: [:name, :id, :avatar_url],
              methods: [:avatar_url]}
          }
        ), status: :ok
      else
        render invalid_connection(connection.errors, connection.person.errors)
      end
    else
      render login_required
    end
  end

  private
  def connection_params
    params.permit :relationship
  end

  def person_params
    params.permit :name, :avatar
  end

end
