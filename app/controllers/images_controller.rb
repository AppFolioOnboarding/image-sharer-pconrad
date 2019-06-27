class ImagesController < ApplicationController
  def new
    @image = Image.new
  end

  def create
    @image = Image.new(params.require(:image).permit(:url, :tag_list))
    new_url = params[:image][:url]

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
    @images = Image.order(created_at: :desc).all
  end

  private

  def save_error(bad_url)
    flash.now[:warning] = "ERROR: saving #{bad_url}: " + @image.errors.full_messages.join(', ')
    render :new
  end
end
