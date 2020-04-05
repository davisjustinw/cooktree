class UsersController < ApplicationController
include ErrorMessage

def create
  @user = User.new(user_params)
  @user.build_person(name: person_params[:name])

  @user.save

  if @user.persisted?
    session[:user_id] = @user.id
    @person = @user.person
    @person.avatar.attach(person_params[:avatar]) if !person_params[:avatar].blank?
    render current_user_person_json
  else
    # need better response here
    render invalid_input(@user.errors, @user.person.errors)
  end
end

private
def user_params
  params.permit :email, :password
end

def person_params
  params.permit :name, :avatar
end

end
