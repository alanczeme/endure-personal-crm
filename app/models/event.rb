class Event < ApplicationRecord
  belongs_to :user
  has_many :contactevents
  has_many :contacts, through :contactevents

  validates :title, presence: true
  validates :start, presence: true
  validates :end, presence: true
end
