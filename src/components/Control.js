import React from "react";
import Search from "./Search";
import Sort from "./Sort";

const Control = (props) => {
  return (
    <div className="row" style={{ marginTop: 15 }}>
      {/* Search */}
      <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5">
        <Search searchByKeyword={(keyword) => props.searchByKeyword(keyword)} />
      </div>
      {/* Sort */}
      <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
        <Sort onSort={(objSort) => props.onSort(objSort)} />
      </div>
      <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
        <button type="button" class="btn btn-danger" onClick={props.deleteCompleted}>
          DeleteCompleted
        </button>
      </div>
      <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
        <button type="button" class="btn btn-danger" onClick={props.deleteAll}>
          Delete All
        </button>
      </div>
    </div>
  );
};

export default Control;
