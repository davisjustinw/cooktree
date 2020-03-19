class ApplicationController < ActionController::API
  def current_user
    @current_user ||= User.find_by(id: session[:user_id])
  end

  def current_person
    current_user.person
  end

  def current_user_person_json
    {
      user: {
        email: current_user.email,
      },
      person: {
        name: current_person.name,
        avatar: rails_blob_path(current_person.avatar, only_path: true)
      }
    }
  end

  def empty_user_person_json
    {
      user: {
        email: '',
      },
      person: {
        name: '',
        avatar: ''
      }
    }
  end

  def logged_in?
    !!current_user
  end
end
