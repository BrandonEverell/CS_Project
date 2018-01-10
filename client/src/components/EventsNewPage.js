import React, { Component } from 'react';
import EventForm from './EventForm';
import { Event } from '../lib/requests';

class EventsNewPage extends Component {
  constructor (props) {
    super(props);
    this.createEvent = this.createEvent.bind(this);
  }

  createEvent (event) {
    console.log('Creating Event!');
    Event
    .create(event)
    .then(event => this.props.history.push(`/events/${event.id}`));
  }

  render () {
    return (
      <div className="EventsNewPage">
        <h1>New Event</h1>
        <EventForm onSubmit={this.createEvent} />
      </div>
    )
  }
}

export default EventsNewPage;
