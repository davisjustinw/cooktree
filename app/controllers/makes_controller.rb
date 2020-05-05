class MakesController < ApplicationController

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
end
