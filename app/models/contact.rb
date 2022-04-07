class Contact < ApplicationRecord
  belongs_to :user
  has_many :contactevents
  has_many :events, through: :contactevents

  validates :first_name, presence: true
  validates :last_name, presence: true
end
