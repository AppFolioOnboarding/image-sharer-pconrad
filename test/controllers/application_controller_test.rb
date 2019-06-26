require 'test_helper'

class ApplicationControllerTest < ActionDispatch::IntegrationTest
  test 'has a home page' do
    get root_path
    assert_response :success
  end

  test 'The landing page links to the image link submission form' do
    get root_path
    assert_response :success
    assert_select 'a', 'New Image'
    assert_select 'a[href=?]', new_image_path
  end
end
