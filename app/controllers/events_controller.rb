class EventsController < ApplicationController
    def index
        render json: Event.all
    end

    def show
        event = find_event
        render json: event, status: :ok
    end

    def update
        event = find_event
        event.update(event_params)
        render json: event, status: :ok
    end

    private

    def find_event
        Event.find(params[:id])
    end

    def event_params
        params.permit(:title, :description, :start, :end, :tags, :location, :notes)
    end
end
