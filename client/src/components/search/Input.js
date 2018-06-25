import React from "react";

const Inputs = props => (
  <div ClassName="form-group">
    <label for={props.name}>{props.name}</label>
    <input
      ClassName="form-control"
      value={props.value}
      onChange={props.changed}
      type="text"
      className="form-control"
    />
  </div>
);

export default Inputs;
