require 'test_helper'

class ApplicationControllerTest < ActionDispatch::IntegrationTest
  test 'has a home page' do
    get root_path
    assert_response :success
    assert_select 'p', 'Test Home Page'
  end


  test 'has a create link on home page' do
    get root_path
    assert_response :success
    assert_select 'a', 'Create'
  end


end
