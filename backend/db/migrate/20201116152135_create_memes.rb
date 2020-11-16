class CreateMemes < ActiveRecord::Migration[6.0]
  def change
    create_table :memes do |t|
      t.string :title
      t.integer :likes, :default => 0 

      t.timestamps
    end
  end
end
