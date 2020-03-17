class SessionsController < ApplicationController
  include Rails.application.routes.url_helpers

  def create
    @user = User.find_by(email: params[:user][:email])

    if @user && @user.authenticate(params[:user][:password])
      session[:user_id] = @user.id
      resp = {
        user: {
          username: @user.username,
          email: @user.email,
          avatar: rails_blob_path(@user.avatar, only_path: true)
        }
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
    puts 'ROUTE: get_current_user'
    if logged_in?
      puts 'logged in'
      puts current_user
      puts '***'
      resp = {
        user: {
          username: current_user.username,
          email: current_user.email,
          avatar: rails_blob_path(current_user.avatar, only_path: true)
        }
      }
    else
      puts 'not logged in'
      resp = {
        user: {
          username: '',
          email: '',
          avatar: ''
        }
      }
    end
    render json: resp, status: :ok
  end
end
