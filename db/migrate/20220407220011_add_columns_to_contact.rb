class AddColumnsToContact < ActiveRecord::Migration[7.0]
  def change
    add_column :contacts, :gender, :string
    add_column :contacts, :birthday, :date
    add_column :contacts, :email, :string
  end
end
