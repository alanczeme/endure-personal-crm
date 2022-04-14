class ContactsController < ApplicationController
    def index
        render json: Contact.all
    end

    def latest_event
        render json: Event.all.order(:start).last
    end
end
