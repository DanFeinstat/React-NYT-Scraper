import React from "react";

const SearchBtn = props => (
  <button
    onClick={props.clicked}
    style={{ float: "right", marginBottom: 10 }}
    className="btn btn-success"
  >
    Search
  </button>
);

export default SearchBtn;
