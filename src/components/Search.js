import React from 'react';

const Search = () => {
    return (
        <div className="input-group">
            <input
                name='keywork'
                type='text'
                className='form-control'
                placeholder='Type keyword'
            />
            <span className="input-group-btn">
                <button type="button" className="btn btn-primary">
                    <i className="fas fa-search"></i> Search
                </button>
            </span>
        </div>
    );
};

export default Search;