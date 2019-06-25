require 'test_helper'

class ImageTest < ActiveSupport::TestCase
  test 'I cannot successfully save an image with an invalid URL' do
    image = Image.new(url: 'foo bar fum')
    assert_not image.valid?, 'bad url'
    assert_not_nil image.errors[:url], 'we should have had an error message'
    assert_equal 'not a valid image url', image.errors[:url].first
  end
end
