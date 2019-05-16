class CreateEntries < ActiveRecord::Migration[5.2]
  def change
    create_table :entries do |t|
      t.string :content
      t.string :author
      t.string :img_url

      t.timestamps
    end
  end
end
