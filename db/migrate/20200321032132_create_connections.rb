class CreateConnections < ActiveRecord::Migration[6.0]
  def change
    create_table :connections do |t|
      t.integer :person_id
      t.integer :relation_id
      t.string :relationship
      t.timestamps
    end
  end
end
