class SessionsController < ApplicationController
  def create
    @user = User.find_by(email: params[:user][:email])

    if @user && @user.authenticate(params[:user][:password])
      session[:user_id] = @user.id
      resp = {
        user: @user.email
      }
      render json: resp, status: :ok
    else
      resp = {
        error: "Invalid credentials"
      }
      render json: resp, status: :unauthorized
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

  end
end
