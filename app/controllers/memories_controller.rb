class MemoriesController < ApplicationController

  def index
    redirect_if_not_logged_in
    recipe = Recipe.find_by(id: params[:recipe])

    render json: recipe.memories, status: :ok
  end

end
