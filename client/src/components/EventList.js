import React from 'react';
import EventSummary from './EventSummary';

function EventList (props) {
  const {
    events = []
  } = props;

  return (
    <div className="EventList">
      {
        events.map(event => (
          <EventSummary key={event.id} {...event} />
        ))
      }
    </div>
  )
}

export default EventList;
