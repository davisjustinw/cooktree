class RecipesController < ApplicationController

  def index
    redirect_if_not_logged_in
    render json: current_user.recipes, status: :ok
  end

  def show
    redirect_if_not_logged_in
    if !Recipe.authorized(current_user).pluck(:id).include?(params[:id].to_i)
      render not_authorized
    else
      recipe = Recipe.find_by(id: params[:id])
      render json: recipe, status: :ok
    end
  end

  private

  def recipe_params
    params.permit(:id)
  end

end
