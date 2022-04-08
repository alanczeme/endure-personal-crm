class EventSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :start, :end, :tags, :location, :notes
  has_one :user
  has_many :contacts, through: :contactevents
end
