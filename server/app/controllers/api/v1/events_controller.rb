class Api::V1::EventsController < ApplicationController
def index
  @events = Event.order(created_at: :desc).limit(10)
  render json: @events
end

def show
  @event = Event.find params[:id]
  render json: @event
end

def create
  event = Event.new event_params

  if event.save
    render json: event
  else
    render json: { errors: event.errors.full_messages }
  end
end

def update
  event = Event.find params[:id]
  if event.update event_params
  else
    render json: {errors: event.errors.full_messages }
  end
end

def destroy
  event = Event.find params[:id]
  if event.destroy

  else
    render json: { errors: event.errors.full_messages}
  end
end

private

def event_params
  params.require(:event).permit(:title,
                                :subtitle,
                                :about_info,
                                :when,
                                :time,
                                :where,
                                :trail,
                                :emergency_contacts,
                                :what_to_expect,
                                :required_gear,
                                :other_recommended_gear,
                                :read_more)
  end
end
