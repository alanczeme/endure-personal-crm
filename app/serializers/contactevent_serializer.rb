class ContacteventSerializer < ActiveModel::Serializer
  attributes :id
  has_one :event
  has_one :contact
end
