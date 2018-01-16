import React from 'react';

function EventAbout (props) {
  const { id, title, subtitle, about_info } = props;

  const spacing = {
    margin: '0'
  }

  if (!title) {
    return (
      <div className="loading">
      </div>
    );
  }

return (
  <div className="EventAbout card" style={spacing}>
    <div className="card-content">
    <h1 style={spacing}>{title.toUpperCase()}</h1>
    <h4>{subtitle}</h4>
    <p style={spacing}>{about_info}</p>
  </div>
  </div>
)
}

export default EventAbout;
