import React from 'react';
import Work from './Work';

const WorksForm = (props) => {
  return (
    <table className="table table-bordered table-hover text-center" style={{ marginTop: 20 }}>
      <thead>
        <tr>
          <th scope="col" className="text-center">#</th>
          <th scope="col" className="text-center">Work Name</th>
          <th scope="col" className="text-center">Status</th>
          <th scope="col" className="text-center">Action</th>
        </tr>
      </thead>
      <tbody>
        {
          // console.log(props.works)
          !!props.works || props.works.length > 0
            ?
            props.works.map((item, index) => (
              <Work 
                work={item} 
                index={index} 
                editWork={ () => props.editWork(item) }
                deleteWork={ () => props.deleteWork(item) }
                changeWorkStatus={ (newStatus) => props.changeWorkStatus(item, newStatus) } 
              />
            ))
            :
            ''
        }
      </tbody>
    </table>
  );
};

export default WorksForm;