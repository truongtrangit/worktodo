import React from 'react';

const Work = (props) => {
  const { work, index } = props
  return (
    <tr>
      <th scope="row" style={{ textAlign: 'center' }}>{index + 1}</th>
      <td>{work.name}</td>
      <td>
        {
          work.status === 'Pending'
            ?
            <span class="label label-danger" onClick={ () => props.changeWorkStatus('Doing') }>{work.status}</span>
            :
            (
              work.status === 'Doing'
                ?
                <span class="label label-warning"onClick={ () => props.changeWorkStatus('Done') }>{work.status}</span>
                :
                <span class="label label-success" onClick={ () => props.changeWorkStatus('Pending') }>{work.status}</span>
            )
        }
      </td>
      <td>
        <button type="button" class="btn btn-success" onClick={ props.editWork }> <i class="fas fa-pencil-alt"></i> Edit</button>
        &nbsp; &nbsp;
            <button type="button" class="btn btn-danger" onClick={ props.deleteWork }><i class="far fa-trash-alt"></i> Delete</button>
      </td>
    </tr>
  );
};

export default Work;