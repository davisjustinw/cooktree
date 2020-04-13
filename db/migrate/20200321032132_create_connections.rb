class CreateConnections < ActiveRecord::Migration[6.0]
  def change
    create_table :connections do |t|
      t.integer :user_id
      t.integer :relation_id
      t.string :relationship
      t.timestamps
    end
  end
end
