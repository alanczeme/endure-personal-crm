class CreateEvents < ActiveRecord::Migration[7.0]
  def change
    create_table :events do |t|
      t.belongs_to :user, null: false, foreign_key: true
      t.string :title
      t.string :description
      t.datetime :start
      t.datetime :end
      t.string :tags
      t.string :location
      t.text :notes

      t.timestamps
    end
  end
end
