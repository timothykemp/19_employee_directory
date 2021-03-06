// Importing required components and modules
import React from 'react';

// Build search field with imported props
function Search(props) {
    return (
        <form>
            <div className="form-group">
                <div className="input-group">
                    <input
                        onChange={props.handleInputChange}
                        value={props.search}
                        name="search"
                        type="text"
                        className="form-control"
                        placeholder="Search Here"
                        id="search"
                    />
                </div>
            </div>
        </form>
    )
}

export default Search;