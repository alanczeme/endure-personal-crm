class CreateContacts < ActiveRecord::Migration[7.0]
  def change
    create_table :contacts do |t|
      t.belongs_to :user, null: false, foreign_key: true
      t.string :first_name
      t.string :last_name
      t.string :avatar
      t.string :address
      t.string :tags
      t.string :gender
      t.date :birthday
      t.string :email

      t.timestamps
    end
  end
end
