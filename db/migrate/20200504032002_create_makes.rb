class CreateMakes < ActiveRecord::Migration[6.0]
  def change
    create_table :makes do |t|
      t.integer :recipe_id
      t.integer :user_id
      t.string :alias
      t.string :content
      t.timestamps
    end
  end
end
