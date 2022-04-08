class User < ApplicationRecord
    has_many :events
    has_many :contacts

    has_secure_password

    validates :username, presence: true, uniqueness: true
end
