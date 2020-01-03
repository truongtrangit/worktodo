import React from 'react';
import Search from './Search';
import Sort from './Sort'

const Control = (props) => {
  return (
    <div className="row" style={{ marginTop: 15 }}>
      {/* Search */}
      <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
        <Search searchByKeyword={(keyword) => props.searchByKeyword(keyword)} />
      </div>
      {/* Sort */}
      <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
        <Sort onSort={(objSort) => props.onSort(objSort)} />
      </div>
    </div>
  );
};

export default Control;