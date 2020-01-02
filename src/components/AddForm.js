import React, { useState } from 'react';

const AddForm = (props) => {
    const [work, changeWork] = useState({ name: '', status: 'Pending' })
    const { name, status } = props.value
    console.log(name, status);

    return (
        <div className="panel panel-warning">
            <div className="panel-heading">
                <h3 className="panel-title">
                    Add New Work
                    <span className="fa fa-times-circle" style={{ float: 'right' }} onClick={ props.changeFormStatus }></span>
                </h3>               
            </div>
            <div className="panel-body">
                <div className="form-group">
                    <input className="form-control form-control-lg" placeholder="Task's Name" type="text" value={work.name} onChange={(e) => changeWork({ name: e.target.value, status: work.status })} />
                </div>
                <div className="form-group">
                    <select className="form-control form-control-lg" value={work.status} onChange={(e) => changeWork({ name: work.name, status: e.target.value })}>
                        <option>Pending</option>
                        <option>Doing</option>
                        <option>Done</option>
                    </select>
                </div>
                <div className="text-center">
                    <button className="btn btn-success" onClick={() => {
                        if (work.name === '') {
                            alert('You must set work\'s name')
                        }
                        else {
                            props.addNewWork(work)
                            changeWork({
                                name: '',
                                status: 'Pending'
                            })
                        }
                    }} > <i class="fas fa-plus"></i> &nbsp;Add</button> &nbsp; &nbsp; &nbsp;
                    <button className="btn btn-danger" onClick={() => changeWork({ name: '', status: 'Pending' })} > <i class="fas fa-trash-restore"></i> &nbsp;Reset</button>
                </div>
            </div>
        </div>
    );
};

export default AddForm;