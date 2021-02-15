import React from 'react';

function Search({ employees }) {
    return (
        <form>
            <div className="row">
                <div className="col">
                    <input
                        // onChange={employees.handleInputChange}
                        type="text"
                        className="form-control mb-3"
                        placeholder="Search Here"
                        id="search"
                    />
                </div>
            </div>
        </form>
    )
}

export default Search;