class UsersController < ApplicationController

def create
  @user = User.create(user_params)
  @person = Person.create(person_params)
  @person.user = @user

  if @user
    session[:user_id] = @user.id
    @person = @user.person
    resp = {
      user: {
        email: @user.email,
      },
      person: {
        name: @person.name,
        avatar: rails_blob_path(@person.avatar, only_path: true)
      }

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
  params.permit(
    :email,
    :password
  )
end

def person_params
  params.permit(
    :name,
    :avatar
  )
end

end
