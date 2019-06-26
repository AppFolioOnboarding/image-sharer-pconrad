require 'test_helper'

class ImagesControllerTest < ActionDispatch::IntegrationTest
  def test_new
    get new_image_path
    assert_response :success
    assert_select 'form'
    assert_select "input[name='image[url]']"
    assert_select "input[name='image[tag_list]'][data-role='tagsinput']"
  end

  def test_create__success
    sample_url = 'https://foo.bar/xyz.gif'
    sample_tag_list = 'foo,bar,fum'
    assert_difference 'Image.count' do
      post images_path, params: {
        image: {
          url: sample_url,
          tag_list: sample_tag_list
        }
      }
    end
    assert_response :redirect
    image = Image.last
    assert_redirected_to image_path(image)
    assert_equal sample_url, image.url
    assert_equal sample_tag_list.split(','), image.tag_list
  end

  def test_create__invalid_url
    bad_url = 'This is a bad url'
    tags = 'foo,bar,fum'
    assert_no_difference 'Image.count' do
      post images_path, params: {
        image: {
          url: bad_url,
          tag_list: tags
        }
      }
    end
    assert_select 'div.alert-warning', "ERROR: saving #{bad_url}: Url not a valid image url"
    assert_select "input[name='image[url]'][value=?]", bad_url
    space_separated_tags = tags.gsub(',', ', ')
    assert_select "input[name='image[tag_list]'][value=?]", space_separated_tags
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
