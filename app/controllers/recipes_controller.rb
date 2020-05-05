class RecipesController < ApplicationController

  def index
    redirect_if_not_logged_in
    render json: current_user.recipes, status: :ok
  end

  def show
    redirect_if_not_logged_in
    render json: Recipe.find(params[:id]), status: :ok
  end

  private

  def recipe_params
    params.permit(:id)
  end
end
