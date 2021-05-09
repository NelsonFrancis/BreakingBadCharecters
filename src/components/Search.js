import React from 'react'

function Search({searchInput, query}) {
    return (
        <div>
            <input type="text" onChange={searchInput} value={query} placeholder="Search here" className="search" />
        </div>
    )
}

export default Search
