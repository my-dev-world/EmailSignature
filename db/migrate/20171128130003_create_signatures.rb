class CreateSignatures < ActiveRecord::Migration[5.1]
  def change
    create_table :signatures do |t|
      t.string :data
      t.string :template

      t.timestamps
    end
  end
end
