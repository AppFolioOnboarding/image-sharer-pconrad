require 'test_helper'

class ImagesControllerTest < ActionDispatch::IntegrationTest
  test 'The link is entered through a form' do
    get new_image_path
    assert_response :success
    assert_select 'form'
    assert_select "input[name='image[url]']"
  end

  test 'posting a valid link works' do
    sample_url = 'https://foo.bar/xyz.gif'
    post images_path, params: { image: { url: sample_url } }
    assert_response :redirect
    assert_redirected_to image_path(Image.last)
  end

  test 'After the form is saved the link is peristed in the database' do
    sample_url = 'https://foo.bar/xyz.gif'
    post images_path, params: { image: { url: sample_url } }
    assert_equal Image.last.url, sample_url
  end

  test 'After the form is submitted, the user is redirected to a page displaying the image' do
    sample_url = 'https://foo.bar/xyz.gif'
    post images_path, params: { image: { url: sample_url } }
    assert_response :redirect
    assert_redirected_to image_path(Image.last)
    follow_redirect!
    assert_select 'img'
    assert_select 'img[src=?]', sample_url
  end

  test 'I cannot successfully save an image with an invalid URL' do
    count_before = Image.count
    bad_url = 'foo bar fum'
    post images_path, params: { image: { url: bad_url } }
    assert_equal count_before, Image.count
  end

  test "An error message is associated with the appropriate input field on
failure" do
    bad_url = 'foo bar fum'
    post images_path, params: { image: { url: bad_url } }
    assert_response :success
    assert_select 'div', "ERROR: saving #{bad_url}: Url not a valid image url"
  end

  test ' A flash message is displayed indicating the image was created successfully' do
    good_url = 'https://learn.appfolio.com/apm/assets/benefits_sprite.png'
    post images_path, params: { image: { url: good_url } }
    assert_redirected_to image_path(Image.last)
    follow_redirect!
    assert_select 'div', "Saved image with url #{good_url}"
  end

  test 'The landing (home) page links to the image link submission form' do
    get root_path
    assert_response :success
    assert_select 'a', 'New Image'
    assert_select 'a[href=?]', new_image_path
  end

  test 'newly added images show up on the home page' do
    good_url = 'https://learn.appfolio.com/apm/assets/benefits_sprite.png'
    post images_path, params: { image: { url: good_url } }
    get root_path
    assert_select 'img[src=?]', good_url
    assert_select 'img[class=?]', 'image-display', count: Image.count
  end

  test 'Newest images appear first' do
    first = 'https://foo.bar/x.jpg'
    second = 'https://foo.bar/y.png'
    Image.create!(url: first)
    Image.create!(url: second)

    get root_path
    assert_select 'img' do |images|
      # require 'pry'; binding.pry
      assert_equal images[0].attributes['src'].value, second
      assert_equal images[1].attributes['src'].value, first
    end
  end
end
