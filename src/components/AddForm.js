import React, { useState } from 'react';

const AddForm = (props) => {
    // const [name, changeName] = useState('')
    // const [status, changeStatus] = useState('Pending')
    const [work, changeWork] = useState({ name: '', status: 'Pending' })

    return (
        <div className="border-form">
            <div className="panel-heading text-center">
                <h4>
                    Add Task
                </h4>
            </div>
            <div className="panel-body">
                <div className="form-group">
                    <input className="form-control form-control-lg" placeholder="Task's Name" type="text" value={work.name} onChange={ (e) => changeWork({ name: e.target.value, status: work.status }) } />
                </div>
                <div className="form-group">
                    <select className="form-control form-control-lg" value={work.status} onChange={ (e) => changeWork( { name: work.name, status: e.target.value } ) }>
                        <option>Pending</option>
                        <option>Doing</option>
                        <option>Done</option>
                    </select>
                </div>
                <div className="text-center">
                    <button className="btn btn-primary" onClick={ () => props.addNewWork(work) } >Add</button> &nbsp; &nbsp; &nbsp;
                    <button className="btn btn-danger" onClick={ () => changeWork({ name: '', status:'Pending' }) } >Reset</button>
                </div>
            </div>
        </div>
    );
};

export default AddForm;