class CreateVehicles < ActiveRecord::Migration
  def change
    create_table :vehicles do |t|

      t.references :household, foreign_key: true
      t.references :resident, foreign_key: true

      t.string :year
      t.string :make
      t.string :model
      t.string :license_plate

      t.timestamps null: false
    end
  end
end
