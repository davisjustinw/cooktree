class SessionsController < ApplicationController
  include Rails.application.routes.url_helpers
  include ErrorMessage
  include Serializers

  def create
    @user = User.find_by(email: params[:user][:email])
    if @user && @user.authenticate(params[:user][:password])
      session[:user_id] = @user.id
      render user_json(current_user)
    else
      render invalid_credentials
    end
  end

  def destroy
    session.clear
    render json: { message: "Logout Successful" }, status: :ok
  end

  def get_current_user
    render logged_in? ? user_json(current_user) : empty_user_json
  end

  private
  def user_params
    params.permit(
      :email,
      :password
    )
  end
end
