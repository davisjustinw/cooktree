class ApplicationController < ActionController::API
  include ErrorMessage

  def current_user
    current_user ||= User.find_by(id: session[:user_id])
  end

  def logged_in?
    !!current_user
  end

  def redirect_if_not_logged_in
    if !logged_in?
      render login_required
    end
  end
end
