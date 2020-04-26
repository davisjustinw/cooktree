class UsersController < ApplicationController
include ErrorMessage
include Serializers

def create
  user = User.new(user_params)
  user.save

  if user.persisted?
    session[:user_id] = user.id
    if !user_params[:avatar_file].blank?
      user.avatar_file.attach(user_params[:avatar_file])
    end
    render user_json(current_user)
  else
    # need better response here
    render invalid_input user_errors
  end
end

def token_to_user
  user = Connection.find_by(confirm_token: params[:token]).relation

  if user && user_params[:avatar_file].blank?
    user.update no_avatar_params
  elsif user
    user.update user_params
  else
    render invalid_credentials
  end

  if user.persisted?
    user.status = "CONFIRMED"
    session[:user_id] = user.id
    render user_json(current_user)
  else
    render invalid_input user_errors
  end

end

private

def user_params
  params.permit :name, :email, :password, :avatar_file
end

def no_avatar_params
  params.permit :name, :email, :password
end

end
