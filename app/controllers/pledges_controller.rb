class PledgesController < ApplicationController
  def new
    @pledge = Pledge.new
  end

  def create
    @pledge = Pledge.new pledge_params

    if @pledge.save
      redirect_to pledge_path(@pledge)
    else
      render :new
    end
  end

  def show
    @pledge = Pledge.find params[:id]
  end

  private
    def pledge_params
      params.require(:pledge).permit([:name, :email, :pledge])
    end
end