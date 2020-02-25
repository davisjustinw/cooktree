class RecipesController < ApplicationController
  def index
    if logged_in?
      @recipes = current_user.recipes
      render json: @recipes, status: :ok
    else
      render json: {
        error: "No user logged in", status: :unauthorized
      }
    end
  end
end
