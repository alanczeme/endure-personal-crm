class CreateContactevents < ActiveRecord::Migration[7.0]
  def change
    create_table :contactevents do |t|
      t.belongs_to :event, null: false, foreign_key: true
      t.belongs_to :contact, null: false, foreign_key: true

      t.timestamps
    end
  end
end
