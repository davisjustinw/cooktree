class UsersController < ApplicationController
include ErrorMessage
include Serializers

def create
  @user = User.new(user_params)
  @user.save

  if @user.persisted?
    session[:user_id] = @user.id
    @user.avatar.attach(user_params[:avatar]) if !user_params[:avatar].blank?
    render user_json(current_user)
  else
    # need better response here
    render invalid_input @user_errors
  end
end

def token_to_user
  binding.pry

end

private

def user_params
  params.permit :name, :email, :password, :avatar
end

end
