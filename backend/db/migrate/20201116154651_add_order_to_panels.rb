class AddOrderToPanels < ActiveRecord::Migration[6.0]
  def change
    add_column :panels, :order, :integer
  end
end
