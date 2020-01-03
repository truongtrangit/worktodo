import Work from './Work';
import React, { useState } from 'react';

const WorksForm = (props) => {

  const [filterName, changeFilterName] = useState('')
  const [filterStatus, changeFilterStatus] = useState('All')


  return (
    <table className="table table-bordered table-hover">
      <thead>
        <tr>
          <th className='text-center'>#</th>
          <th className='text-center'>Name</th>
          <th className='text-center'>Status</th>
          <th className='text-center'></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td></td>
          <td>
            <input type='text' className='form-control' name='filterName' value={filterName} onChange={e => {
              changeFilterName(e.target.value)
              props.filter(e.target.value, filterStatus)
            }} />
          </td>
          <td>
            <select className='form-control' name='filterStatus' value={filterStatus} onChange={e => {
              changeFilterStatus(e.target.value)
              props.filter(filterName, e.target.value)
            }}>
              <option value='All'>All</option>
              <option value='Pending'>Pending</option>
              <option value='Doing'>Doing</option>
              <option value='Done'>Done</option>
            </select>
          </td>
          <td></td>
        </tr>
        {
          props.works.map((item, index) => (
            <Work
              key={index}
              work={item}
              index={index}
              changeWorkStatus={(newStatus) => props.changeWorkStatus(item, newStatus)}
              editWork={() => props.editWork(item)}
              deleteWork={() => props.deleteWork(item)}
            />
          ))
        }
      </tbody>
    </table>
  );
};

export default WorksForm;