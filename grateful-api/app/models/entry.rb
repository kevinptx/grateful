class Entry < ApplicationRecord
  has_many :comments, dependent: :destroy
end
