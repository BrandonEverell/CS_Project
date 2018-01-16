import React, { Component } from "react";
import EventCover from './EventCover';
import EventAbout from './EventAbout';
import EventDetails from './EventDetails';
import RequiredGear from './RequiredGear';
import CodeOfConduct from './CodeOfConduct';
import { Link } from 'react-router-dom';
import { Event } from "../lib/requests";
import Moment from 'react-moment';


class EventsShowPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      event: {}
    };
  }

  componentDidMount() {
    const { params } = this.props.match;

    Event.get(params.id).then(event => {
      this.setState({ event });
    });
  }

  render() {
    return <div className="EventsShowPage container">
        <EventCover {...this.state.event} />
        <EventAbout {...this.state.event} />
        <EventDetails {...this.state.event} />
        <RequiredGear {...this.state.event} />
        <CodeOfConduct {...this.state.event} />
        <Link to="/events/:id/edit">Edit</Link>
    </div>;
  }
}

export default EventsShowPage;
