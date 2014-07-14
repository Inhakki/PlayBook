class PagesController < ApplicationController

  def index
    @pages = Page.all

    if @pages
      render json: @pages
    else
      render status: 400, nothing: true
    end
  end

  def show
    @page = Pages.find(params[:id])

    if @page
      render json: @page
    else
      render status: 400, nothing: true
    end
  end

end
