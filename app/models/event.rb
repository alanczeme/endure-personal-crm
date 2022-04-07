class Event < ApplicationRecord
  belongs_to :user
  has_many :contactevents
  has_many :contacts, through :contactevents
end
