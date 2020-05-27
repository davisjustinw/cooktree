class RecipesController < ApplicationController

  def index
    redirect_if_not_logged_in
    render json: current_user.recipes, status: :ok
  end

  def show
    redirect_if_not_logged_in
    recipe = Recipe.find(params[:id])
    # what are all the recipe_users
    # what are all current user relations
    # recipe_users include current relations?
    binding.pry
    render json: recipe, status: :ok
  end

  private

  def recipe_params
    params.permit(:id)
  end
end
