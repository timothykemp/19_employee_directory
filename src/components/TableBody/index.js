import React from 'react';
import dateFormat from 'dateformat';

function TableBody({ employees }) {
    return (
        <tbody>
            {
                employees.map((employee) => {
                    return (
                        <tr key={employee.login.uuid}>
                            <td><img src={employee.picture.large} alt={employee.name.first + " " + employee.name.last} /></td>
                            <td>{employee.name.first}</td>
                            <td>{employee.name.last}</td>
                            <td>{employee.phone}</td>
                            <td>{employee.email}</td>
                            <td>{dateFormat(employee.dob.date, "paddedShortDate")}</td>
                        </tr>
                    )
                })
            }
        </tbody>
    );
}

export default TableBody;