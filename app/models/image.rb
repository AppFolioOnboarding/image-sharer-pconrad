class Image < ApplicationRecord
  validates :url, format: { with: %r{(http(s?):)([\/|.|\w|\s|-])*\.(?:jpg|gif|png)},
                            message: 'not a valid image url' }
end
