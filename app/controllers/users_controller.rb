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
    render invalid_input(@user.errors, @user.person.errors)
  end
end

def invite
  #tweak this
  redirect_if_not_logged_in
  relation = User.find_by id: invitation_params[:id]
  relation.invitation from: current_user

  # UserMailer.invitation(params[:invitation]).deliver_now
  render json: { message: 'Invitation Sent' }, status: :ok
end

private
def invitation_params
  params.require(:user).permit :id, :email
end

def user_params
  params.permit :name, :email, :password, :avatar
end

end
