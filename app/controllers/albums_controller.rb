class AlbumsController < ApplicationController
  before_action :find_user, only: [:new, :create]

  def index
    # makes all Albums available to be grabbed by the view.
    @albums = Album.all

    # This controls the background of the landing page.
    @img_select = ['pulpfiction.gif', 'coffeeshop.gif', 'strangelove.gif', 'peek.gif', 'lolita.gif'].sample
  end

  def new
    @album = Album.new
  end

  def create
    @album = Album.create(album_params)
    redirect_to @album
  end

  def show
    @album = Album.find(params[:id])
  end

  private

  def find_user
    @user = User.find(params[:user_id])
  end

  def album_params
    params.require(:album).permit(:title, :style, :user_id)
  end

end
