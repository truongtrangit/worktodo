import React from 'react';

const Sort = (props) => {
    return (
        <div className="btn-group">
            <button type="button" className="btn btn-warning dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Filter <span className="caret"></span>
            </button>
            <ul className="dropdown-menu">
                <li onClick={ () => props.onSort({ by: 'name', value: 1 }) }>
                    <a role='button' href>
                        <i className="fas fa-sort-alpha-down"></i> Name A-Z
                    </a>
                </li>
                <li onClick={ () => props.onSort({ by: 'name', value: -1 }) }><a role='button' href><i className="fas fa-sort-alpha-down-alt"></i> Name A-Z</a></li>
                <li role='separator' className='divider'></li>
                <li onClick={ () => props.onSort({ by: 'status', value: 'Pending' }) }><a role='button' href>Pending Status</a></li>
                <li onClick={ () => props.onSort({ by: 'status', value: 'Doing' }) }><a role='button' href>Doing Status</a></li>
                <li onClick={ () => props.onSort({ by: 'status', value: 'Done' }) }><a role='button' href>Done Status</a></li>
            </ul>
        </div>
    );
};

export default Sort;