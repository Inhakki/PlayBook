class PagesController < ApplicationController
  before_action :find_album, only: [:index, :create]

  def index
    @pages = @album.pages.all

    #This part of the code renders
    if @pages
      render json: @pages
    else
      render status: 400, nothing: true
    end
  end

  def create
    @page = Page.create(page_params)
    @page.album_id = params["album_id"]
    if @page.save
      redirect_to @page
    else
      redirect_to @album
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

  private

  def find_album
    @album = Album.find(params[:album_id])
  end

  def page_params
    params.require(:page).permit(:title, :story, :video_url, :audio_url)
  end

end
