class CreateMemories < ActiveRecord::Migration[6.0]
  def change
    create_table :memories do |t|
      t.string :share
      t.integer :make_id
      t.integer :user_id
      t.timestamps
    end
  end
end
