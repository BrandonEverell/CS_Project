class EventsSerializer < ActiveModel::Serializer
  attributes :id, :title, :subtitle, :about_info, :when, :time, :where, :trail, :emergency_contacts, :what_to_expect, :required_gear, :other_recommended_gear, :read_more
end
