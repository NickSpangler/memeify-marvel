class CreatePanels < ActiveRecord::Migration[6.0]
  def change
    create_table :panels do |t|
      t.string :image_url
      t.string :caption
      t.integer :order
      t.belongs_to :meme, null: false, foreign_key: true

      t.timestamps
    end
  end
end
