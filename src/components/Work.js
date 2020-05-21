import React from 'react';

const Work = (props) => {
  const { work, index } = props
  return (
    <tr className='text-center'>
      <th scope="row" style={{ textAlign: 'center' }}>{index + 1}</th>
      <td>{work.name}</td>
      <td>
        {
          work.status === 'Pending'
            ?
            <span className="label label-danger" onClick={ () => props.changeWorkStatus('Doing') }>{work.status}</span>
            :
            (
              work.status === 'Doing'
                ?
                <span className="label label-warning"onClick={ () => props.changeWorkStatus('Done') }>{work.status}</span>
                :
                <span className="label label-success" onClick={ () => props.changeWorkStatus('Pending') }>{work.status}</span>
            )
        }
      </td>
      <td>
        <button type="button" className="btn btn-success" onClick={ props.editWork }> <i className="fas fa-pencil-alt"></i> Edit</button>
        &nbsp; &nbsp;
            <button type="button" className="btn btn-danger" onClick={ props.deleteWork }><i className="far fa-trash-alt"></i> Delete</button>
      </td>
    </tr>
  );
};

export default Work;