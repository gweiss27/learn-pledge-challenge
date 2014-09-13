class CreatePledges < ActiveRecord::Migration
  def change
    create_table :pledges do |t|
      t.string :name
      t.string :email
      t.text :pledge

      t.timestamps
    end
  end
end
