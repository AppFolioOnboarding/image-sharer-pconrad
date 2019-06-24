require 'test_helper'

class ImagesControllerTest < ActionDispatch::IntegrationTest

  test "The link is entered through a form" do
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

  test "After the form is saved the link is peristed in the database" do
    sample_url = 'https://foo.bar/xyz.gif'
    post images_path, params: { image: { url: sample_url } }
    assert_equal Image.last.url, sample_url
  end

   test "After the form is submitted, the user is redirected to a page displaying the image." do
    sample_url = 'https://foo.bar/xyz.gif'
    post images_path, params: { image: { url: sample_url } }
    assert_response :redirect
    assert_redirected_to image_path(Image.last)
    follow_redirect!
    assert_select 'img'
    assert_select 'img[src=?]', sample_url
  end

end
