class ConnectionsController < ApplicationController
  include ErrorMessage
  include Serializers

  def index
    redirect_if_not_logged_in
    user = User.find_by(id: params[:id])
    connections = user.connections
    render connection_json(connections)
  end

  def show
    redirect_if_not_logged_in
    connection = Connection.find_by(id: params[:id])
    render connection_json(connection)
  end

  def create
    redirect_if_not_logged_in

    connection = Connection.new user: current_user, relationship: connection_params[:relationship]
    relation = User.create relation_params
    connection.relation = relation
    connection.save

    if connection.persisted?
      connection.invitation if !relation[:email].empty?
      render connection_json(connection)
    else
      render invalid_connection(connection.errors, connection.user.errors)
    end
  end

  def invite
    redirect_if_not_logged_in
    connection = Connection.find params[:id]
    connection.update(invitation_params)
    connection.invitation
    render connection_json(connection)
  end

  def get_invitation_user
    connection = Connection.find_by(confirm_token: params[:token])
    render connection ? user_json(connection.relation) : empty_user_json
  end

  private
  def invitation_params
    params.require(:connection).permit(relation_attributes: [:id, :name, :email])
  end

  def connection_params
    params.permit :relationship
  end

  def relation_params
    params.permit :name, :email, :avatar
  end

end
