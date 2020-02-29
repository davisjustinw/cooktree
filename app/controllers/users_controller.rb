class UsersController < ApplicationController

def create
  @user = User.create(user_params)

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
  params.require(:user).permit(:email, :password)
end

end
