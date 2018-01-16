import React from "react";
import Moment from 'react-moment';



function EventCover(props) {
  const { id, title, when } = props;




  const style = {
    backgroundColor: "DimGrey",
    color: 'white'
  }

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
    <div className="EventCover card center-align" style={spacing}>
      <div className="card-content">
        <h1 className="center-align" style={spacing}>{title.toUpperCase()}</h1>
        <h3><Moment parse="YYYY-MM-DD HH:mm">{when}</Moment></h3>
      </div>
      <div className="Disclaimer card-content" style={style}>
        <strong>DISCLAIMER</strong>
        <p style={spacing}>
          We are not mountain guides or mountain experts. Before you come, do
          your own research, understand the route, have the right gear and make
          sure you are comfortable getting up and down on your own.
        </p>
      </div>

  </div>
  );
}

export default EventCover;
