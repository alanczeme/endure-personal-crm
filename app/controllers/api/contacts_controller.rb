class Api::ContactsController < ApplicationController
    def index
        render json: Contact.all
    end

    def show
        contact = find_contact
        render json: contact, status: :ok
    end

    private

    def find_contact
        Contact.find(params[:id])
    end

end
