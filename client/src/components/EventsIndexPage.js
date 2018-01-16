import React, { Component } from "react";
import EventList from "./EventList";
import { Event } from "../lib/requests";

class EventsIndexPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: []
    };
  }

  componentDidMount() {
    Event.getAll().then(data => {
      this.setState({ events: data });
    });
  }

  render() {
    return (
      <div className="EventsIndexPage">
        <EventList events={this.state.events} />
      </div>
    );
  }
}

export default EventsIndexPage;
