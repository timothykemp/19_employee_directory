import React from 'react';
import { Table } from 'react-bootstrap';

function Directory({ employees }) {
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Last Name</th>
                    <th>First Name</th>
                    <th>Phone</th>
                </tr>
            </thead>
            <tbody>
                {
                    employees.map((employee) => {
                        return (
                            <tr key={employee.login.uuid}>
                                <td>{employee.phone}</td>
                                <td>{employee.phone}</td>
                                <td>{employee.phone}</td>
                                <td>{employee.phone}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </Table>
    )
}

export default Directory;