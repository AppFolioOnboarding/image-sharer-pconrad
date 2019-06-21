require 'test_helper'

class ImageUrlControllerTest < ActionDispatch::IntegrationTest
  test "should get create" do
    get image_url_create_url
    assert_response :success
  end

end
