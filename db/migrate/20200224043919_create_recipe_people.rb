class CreateRecipePeople < ActiveRecord::Migration[6.0]
  def change
    create_table :recipe_people do |t|
      t.integer :recipe_id
      t.integer :person_id
      t.string :role

      t.timestamps
    end
  end
end
