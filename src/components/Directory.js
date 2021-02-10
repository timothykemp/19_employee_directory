import React from 'react';
import { Table } from 'react-bootstrap';
import dateFormat from 'dateformat';

function Directory({ employees }) {

    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Image</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Phone</th>
                    <th>Email</th>
                    <th>Birthday</th>
                </tr>
            </thead>
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
        </Table>
    )
}

export default Directory;