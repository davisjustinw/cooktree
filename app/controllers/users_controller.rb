class UsersController < ApplicationController

def create
  puts '***'
  puts user_params
  puts '***'
  @user = User.create(user_params)
  puts "fffuuuun"
  if @user
    session[:user_id] = @user.id
    resp = {
      user: @user.email
    }
    render json: resp, status: :ok
  else
    resp = {
      error: "Invalid User"
    }
    render json: resp, status: :unauthorized
  end
end

private
def user_params
  params.permit(:username, :email, :password, :avatar)
end

end
