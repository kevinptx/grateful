class EntrySerializer < ActiveModel::Serializer
  attributes :id, :content, :author, :img_url
  has_many :comments
end
