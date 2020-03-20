class RecipesController < ApplicationController
  include ErrorMessage

  def index
    if logged_in?
      @recipes = current_person.recipes
      render json: @recipes, status: :ok
    else
      render login_required
    end
  end
end
