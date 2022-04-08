class ContactSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :avatar, :address, :tags
  has_one :user
end
