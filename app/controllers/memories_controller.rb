class MemoriesController < ApplicationController

  def index
    redirect_if_not_logged_in
    recipe = Recipe.find_by(id: params[:recipe])

    render json: recipe.memories, status: :ok
  end

  def create
    redirect_if_not_logged_in
    memory = Memory.new memory_params
    memory.user = current_user
    memory.save
    if !photo_params[:photo_file].blank?
      memory.photo_file.attach(photo_params[:photo_file])
    end
    
    render json: memory, status: :ok
  end

  private

  def memory_params
    params.permit :make_id, :share
  end

  def photo_params
    params.permit :photo_file
  end

end
