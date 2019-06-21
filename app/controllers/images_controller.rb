class ImagesController < ApplicationController
  def new; end

  def create

    # require 'pry'; binding.pry
    puts "Hello"
    puts params[:url]
    @image = Image.new(url: params[:image][:url] )
    @image.save
    redirect_to @image

  end

  def show
    @image = Image.find(params[:id])
  end


end
