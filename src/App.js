import React, { useState } from 'react';
import './App.css';
import AddForm from './components/AddForm';
import WorksForm from './components/WorksForm';

function App() {
  const [addWorkStatus, changeAddWorkStatus] = useState(false)
  const [works, changeWorks] = useState([])

  return (
    <div className="container">
      <hr />
      <div className="text-center">
        <h1>To Do List</h1>
      </div>
      <hr />
      <div className="row">
        <div className={ addWorkStatus ? 'col-xs-4 col-sm-4 col-md-4 col-lg-4' : ''}>
          {
            addWorkStatus ?  <AddForm  addNewWork={ work => {
              works.push(work)
              changeAddWorkStatus(!addWorkStatus)
              changeWorks(works)
            }} /> : ''
          }
        </div>
        <div className={ addWorkStatus ? 'col-xs-8 col-sm-8 col-md-8 col-lg-8': 'col-xs-12 col-sm-12 col-md-12 col-lg-12' }>
          <button className="btn btn-primary" onClick={ () => changeAddWorkStatus(!addWorkStatus) }><i className="far fa-plus-square"></i>Add New Task</button> &nbsp; &nbsp;
          <div className="btn-group">
            <button type="button" className="btn btn-danger dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Sắp xếp
            </button>
            <div className="dropdown-menu">
              <a className="dropdown-item" href="#">Action</a>
              <a className="dropdown-item" href="#">Another action</a>
              <a className="dropdown-item" href="#">Something else here</a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="#">Separated link</a>
            </div>
          </div>
          <WorksForm works={works} />
        </div>
      </div>

    </div>

  );
}

export default App;
