import React from 'react';
import {Link} from 'react-router-dom';

function EventSummary (props) {
  const {id, title, when} = props;

  return (
    <div className="EventSummary">
      <Link to={`/events/${id}`}>{title}</Link>
    </div>
  );
}

export default EventSummary;
