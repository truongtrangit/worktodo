import React from 'react';

const Sort = () => {
    return (
        <div className="btn-group">
            <button type="button" className="btn btn-danger">Filter</button>
            <button type="button" className="btn btn-danger dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <span className="caret"></span>
                <span className="sr-only">Toggle Dropdown</span>
            </button>
            <ul className="dropdown-menu">
                <li>
                    <a role='button'>
                        <i class="fas fa-sort-alpha-down"></i> Name A-Z
                    </a>
                </li>
                <li><a role='button'><i class="fas fa-sort-alpha-down-alt"></i> Name A-Z</a></li>
                <li><a role='button'>Pending Status</a></li>
                <li><a role='button'>Doing Status</a></li>
                <li><a role='button'>Done Status</a></li>
            </ul>
        </div>
    );
};

export default Sort;