import React from "react";
import Search from "../Search";
import DataTable from "../DataTable";

function Directory({ employees }) {
    return (
        <div>
            <Search />
            <DataTable employees={this.state.employees} />
        </div>
    )
}

export default Directory;
