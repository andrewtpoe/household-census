class CreateResidents < ActiveRecord::Migration
  def change
    create_table :residents do |t|

      t.references :household, foreign_key: true

      t.boolean :is_user
      t.string :first_name
      t.string :last_name
      t.integer :age
      t.string :gender
      t.string :email

      t.timestamps null: false
    end
  end
end
