import React from 'react';

function Search(props) {
    return (
        <form>
            <div className="row">
                <div className="col">
                    <input
                        onChange={props.handleInputChange}
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