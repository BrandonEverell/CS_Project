import React, { Component } from 'react';
import EventForm from './EventForm';
import { Event } from '../lib/requests';

class EventEditPage extends Component {
  constructor (props) {
    super(props);

    this.state = {
      event: {}
    };

    this.updateEvent = this.updateEvent.bind(this);
  }

  componentDidMount () {
    const { params } = this.props.match;

    Event
    .get(params.id)
    .then(event => this.setState({event}))
  }

  updateEvent (event) {
    console.log('Updating Event!');
    Event
    .update(event.this.state.event.id)
    .then(event => this.props.history.push(`/events/${event.id}`))
  }

  render() {
    console.log(this.state.event);
    if (this.state.event.title) {
      return (
        <div className="EventEditPage">
          <EventForm {...this.state.event} onSubmit={this.updateEvent} />
        </div>
      );
    } else {
      return <div></div>
    }
  }
}

export default EventEditPage;
