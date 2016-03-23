class CreateHouseholds < ActiveRecord::Migration
  def change
    create_table :households do |t|

      t.references :user, index: true, foreign_key: true

      t.string :address
      t.string :city
      t.string :state
      t.string :zipcode
      t.integer :number_of_bedrooms

      t.timestamps null: false
    end
  end
end
