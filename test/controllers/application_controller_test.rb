require 'test_helper'

class ApplicationControllerTest < ActionDispatch::IntegrationTest
  test 'has a home page' do
    get root_path
    assert_response :success
  end
end
