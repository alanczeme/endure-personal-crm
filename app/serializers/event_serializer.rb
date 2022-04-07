class EventSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :start, :end, :tags, :location, :notes
  has_one :user
end
