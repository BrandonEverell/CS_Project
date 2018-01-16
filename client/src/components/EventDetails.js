import React from 'react';

function EventDetails (props) {
  const {id, when, time, where, trail
} = props;

const style = {
  backgroundColor: 'Gainsboro',
  margin: '0'
}

const spacing = {
  margin: '0'
}

return (
  <div className="EventDetails card" style={style}>
    <div className="card-content">
    <h1 style={spacing}> THE DETAILS </h1>
    <p><strong>When: </strong>{when}</p>
    <p><strong>Time: </strong>{time}</p>
    <p><strong>Where: </strong>{where}</p>
    <p style={spacing}><strong>Trail: </strong>{trail}</p>
  </div>
  </div>
)
}

export default EventDetails;
