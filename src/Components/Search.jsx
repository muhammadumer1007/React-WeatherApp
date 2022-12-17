import React from 'react'

function Search({ handleSearchChange, searchValue , handleSearchOnClick }) {
    return (
        <>
            <div className='container mt-3'>
                <form className="d-flex justify-content-center align-items-center" onSubmit={handleSearchOnClick}>
                    <div className="w-100">
                        <input type="text" className="form-control" placeholder="Type A City To Search " value={searchValue} onChange={handleSearchChange} />
                    </div>
                    <div className="">
                        <button type="button" className="btn btn-success mx-1" >Search</button>
                    </div>

                </form>
            </div>
        </>
    )
}

export default Search