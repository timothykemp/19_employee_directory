import React from 'react';
import Form from 'react-bootstrap';

function Search({ employees }) {
    return (
        <Form>
            <div className="row">
                <div className="col">
                    <input
                        onChange={employees.handleInputChange}
                        type="text"
                        className="form-control mb-3"
                        placeholder="Search Here"
                        id="search"
                    />
                </div>
            </div>
        </Form>
    )
}

export default Search;