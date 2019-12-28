import React from 'react';

const WorksForm = (props) => {
    return (
        <table className="table table-bordered mt-3">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Work Name</th>
                    <th scope="col">Status</th>
                    <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.works.map((item, index) => (
                        <tr>
                            <th scope="row">{index + 1}</th>
                            <td>{item.name}</td>
                            <td>{item.status}</td>
                            <td></td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    );
};

export default WorksForm;