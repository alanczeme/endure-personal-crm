class Contactevent < ApplicationRecord
  belongs_to :event
  belongs_to :contact

  validates :event_id, presence: true
  validates :contact_id, presence: true, uniqueness: { scope: :event_id, message: "Each event can only be associated with a contact once." }
end
