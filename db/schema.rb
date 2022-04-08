# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2022_04_07_220011) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "contactevents", force: :cascade do |t|
    t.bigint "event_id", null: false
    t.bigint "contact_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["contact_id"], name: "index_contactevents_on_contact_id"
    t.index ["event_id"], name: "index_contactevents_on_event_id"
  end

  create_table "contacts", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.string "first_name"
    t.string "last_name"
    t.string "avatar"
    t.string "address"
    t.string "tags"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "gender"
    t.date "birthday"
    t.string "email"
    t.index ["user_id"], name: "index_contacts_on_user_id"
  end

  create_table "events", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.string "title"
    t.string "description"
    t.datetime "start"
    t.datetime "end"
    t.string "tags"
    t.string "location"
    t.text "notes"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_events_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "password_digest"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_foreign_key "contactevents", "contacts"
  add_foreign_key "contactevents", "events"
  add_foreign_key "contacts", "users"
  add_foreign_key "events", "users"
end
