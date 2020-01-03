import React, { useState } from 'react';

const Search = (props) => {
    const [keyword, changeKeyword] = useState('')
    return (
        <div className="input-group">
            <input
                name='keywork'
                type='text'
                className='form-control'
                placeholder='Type keyword'
                onChange={ e => changeKeyword(e.target.value) }
            />
            <span className="input-group-btn">
                <button type="button" className="btn btn-primary" onClick={ () => props.searchByKeyword(keyword) }>
                    <i className="fas fa-search"></i> Search
                </button>
            </span>
        </div>
    );
};

export default Search;