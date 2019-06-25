class Image < ApplicationRecord
  validates :url, format: { with: /(http(s?):)([\/|.|\w|\s|-])*\.(?:jpg|gif|png)/, message: "not a valid image url" }

end
