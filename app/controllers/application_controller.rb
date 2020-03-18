class ApplicationController < ActionController::API
  def current_user
    @current_user ||= User.find_by(id: session[:user_id])
  end

  def current_person
    @current_user.person
  end

  def logged_in?
    !!current_user
  end
end
