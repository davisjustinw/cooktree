class RecipesController < ApplicationController
  include ErrorMessage

  def index
    redirect_if_not_logged_in
    @recipes = current_person.recipes
    render json: @recipes, status: :ok
  end

  def show

  end
end
