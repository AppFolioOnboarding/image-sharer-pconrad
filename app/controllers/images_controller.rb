class ImagesController < ApplicationController
  def new; end

  def create
    new_url = params[:image][:url]
    @image = Image.new(url: new_url)

    if @image.valid?
      @image.save
      flash[:success] = "Saved image with url #{new_url}"
      redirect_to @image
    else
      save_error(new_url)
    end
  end

  def show
    @image = Image.find(params[:id])
  end

  def index
    @images = Image.all
  end

  private

  def save_error(bad_url)
    flash.now[:warning] = "ERROR: saving #{bad_url}: " + @image.errors.full_messages.join(', ')
    render :new
  end
end
