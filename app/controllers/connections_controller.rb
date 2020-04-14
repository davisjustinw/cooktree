class ConnectionsController < ApplicationController
  include ErrorMessage
  include Serializers

  def index
    if logged_in?
      user = User.find_by(id: params[:id])
      connections = user.connections
      render connection_json(connections)
    else
      render login_required
    end
  end

  def show
    if logged_in?
      puts 'show connection'
      connection = Connection.find_by(id: params[:id])
      render connection_json(connection)
    else
      render login_required
    end
  end

  def create
    if logged_in?
      puts params
      connection = Connection.new user: current_user, relationship: connection_params[:relationship]
      relation = User.new relation_params
      relation.save
      connection.relation = relation
      connection.save

      if connection.persisted?
        render connection_json(connection)
      else
        render invalid_connection(connection.errors, connection.user.errors)
      end
    else
      render login_required
    end
  end

  private
  def connection_params
    params.permit :relationship
  end

  def relation_params
    params.permit :name, :email, :avatar
  end

end
