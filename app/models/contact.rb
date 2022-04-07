class Contact < ApplicationRecord
  belongs_to :user
  has_many :contactevents
  has_many :events, through :contactevents
end
