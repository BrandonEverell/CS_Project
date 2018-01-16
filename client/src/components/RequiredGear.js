import React from "react";

function RequiredGear(props) {
  const { id, required_gear } = props;

  const spacing = {
    margin: "0"
  };

  return (
    <div className="card" style={spacing}>
      <div className="whatToExpect card-content section">
        <div className="row">
          <h1 className="col s11"style={spacing}>WHAT TO EXPECT</h1>
          <i className="material-icons">add</i>
        </div>
      </div>
      <div className="divider" />
      <div className="RequiredGear section">
        <div className="card-content">
          <div className="row">
            <h1 className="col s11" style={spacing}>REQUIRED GEAR</h1>
            <i className="material-icons">add</i>
          </div>
          <p style={spacing}>{required_gear}</p>
        </div>
      </div>
      <div className="divider" />
      <div className="otherRecommendedGear card-content section">
        <div className="row">
          <h1 className="col s11" style={spacing}>OTHER RECOMMENDED GEAR</h1>
          <i className="material-icons">add</i>
        </div>
      </div>
      <div className="divider" />
    </div>
  );
}

export default RequiredGear;
