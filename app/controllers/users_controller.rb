class UsersController < ApplicationController
include ErrorMessage
include Serializers

def create
  user = User.new(user_params)
  user.status = "CONFIRMED"
  user.save

  if user.persisted?
    session[:user_id] = user.id
    if !avatar_params[:avatar_file].blank?
      user.avatar_file.attach(avatar_params[:avatar_file])
    end
    # render user_json(current_user)
    render json: current_user
  else
    # need better response here
    render invalid_input user_errors
  end
end

def token_to_user
  binding.pry
  user = Connection.find_by(confirm_token: params[:token]).relation
  render invalid_credentials if !user

  connection = Connection.new(connection_params)
  connection.user = user

  user.attributes = user_params
  user.status = "CONFIRMED"
  if !avatar_params[:avatar_file].blank?
    user.attributes = avatar_params[:avatar_file]
  end

  if user.save
    connection.save
    session[:user_id] = user.id
    #render user_json(current_user)
    render json: current_user
  else
    render invalid_input user_errors
  end

end

private

def user_params
  params.permit :name, :email, :password
end

def avatar_params
  params.permit :avatar_file
end

def connection_params
  params.permit :relation_id, :relationship
end

end
