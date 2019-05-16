class CreateComments < ActiveRecord::Migration[5.2]
  def change
    create_table :comments do |t|
      t.string :content
      t.integer :upvotes, default: 0
      t.integer :downvotes, default: 0
      t.belongs_to :entry, foreign_key: true

      t.timestamps
    end
  end
end
