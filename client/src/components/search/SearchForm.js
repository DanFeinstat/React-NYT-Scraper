import React from "react";
import Inputs from "./Input";
import SearchButton from "./SearchBtn";

const SearchForm = props => {
  const searchLabels = props.labels.map((label, index) => {
    return (
      <Inputs
        name={label.id}
        value={label.val}
        changed={event => props.changed(event, label.id)}
        key={label.id}
      />
    );
  });

  return (
    <form>
      <div>
        {searchLabels}
        <SearchButton clicked={props.submit} />
      </div>
    </form>
  );
};

export default SearchForm;
