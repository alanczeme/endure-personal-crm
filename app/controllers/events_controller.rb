class EventsController < ApplicationController
    def index
        render json: Event.all
    end

    def show
        event = find_event
        render json: event, status: :ok
    end

    private

    def find_event
        Event.find(params[:id])
    end
end
