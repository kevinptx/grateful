class CommentSerializer < ActiveModel::Serializer
  attributes :id, :content, :upvotes, :downvotes
  belongs_to :entry

  def entry
    Entry.where("id=#{self.object.entry_id}").first.author
  end
end
