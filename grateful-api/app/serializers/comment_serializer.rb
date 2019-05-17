class CommentSerializer < ActiveModel::Serializer
  attributes :id, :content, :upvotes, :downvotes
  belongs_to :entry
end
