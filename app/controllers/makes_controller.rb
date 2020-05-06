class MakesController < ApplicationController

  def create
    redirect_if_not_logged_in

    make = Make.new(new_make_params)

    if !make.recipe
      recipe = Recipe.create(new_recipe_params)
      make.recipe = recipe
    end
    
    make.user = current_user
    make.save
    render json: make, status: :ok
  end

  def update
    redirect_if_not_logged_in
    make = Make.find_by(id: params[:id])
    make.update(make_params)
    render json: make, status: :ok
  end

  private

  def make_params
    params.require(:make).permit(:id, :alias, :content)
  end

  def new_make_params
    params.require(:make).permit(:recipe_id, :alias, :content)
  end

  def new_recipe_params
    params.require(:recipe).permit(:id, :name)
  end
end
