class SessionsController < ApplicationController
  include Rails.application.routes.url_helpers
  include ErrorMessage

  def create
    @user = User.find_by(email: params[:user][:email])
    if @user && @user.authenticate(params[:user][:password])
      session[:user_id] = @user.id
      render current_user_person_json
    else
      render invalid_credentials
    end
  end

  def destroy
    session.clear
    resp = {
      message: "Logout Successful"
    }
    render json: resp, status: :ok
  end

  def get_current_user
    if logged_in?
      resp = current_user_person_json
    else
      resp = empty_user_person_json
    end
    render json: resp, status: :ok
  end

  private
  def user_params
    params.permit(
      :email,
      :password
    )
  end
end
