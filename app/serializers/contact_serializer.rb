class ContactSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :avatar, :address, :tags, :birthday, :email, :gender
  has_one :user
  has_many :events, through: :contactevents do
    object.events.order(start: :desc)
  end
end
