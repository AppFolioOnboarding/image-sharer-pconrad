require 'test_helper'

class ImagesControllerTest < ActionDispatch::IntegrationTest

  test "there should be a form for entering new images" do
    get new_image_path
    assert_response :success
    assert_select 'form'
    assert_select "input[name='image[url]']"
  end


  test "posting a valid link works" do
    sample_url = 'https://foo.bar/xyz.gif'
    post images_path, params: { image: { url: sample_url } }
    assert_response :redirect
    assert_redirected_to image_path(Image.last)
  end

end
