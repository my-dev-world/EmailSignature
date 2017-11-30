class ChangeDataColumn < ActiveRecord::Migration[5.1]
  def up
    change_column :signatures, :data, :text
    change_column :signatures, :template, :text
  end

  def down
  	change_column :signatures, :data, :string
    change_column :signatures, :template, :string
  end
end
