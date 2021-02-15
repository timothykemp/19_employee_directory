import React from 'react';
import { Container, Table } from 'react-bootstrap';
import dateFormat from 'dateformat';
import style from './style.module.css';

function DataTable({ employees }) {

    return (
        <Container>
            <Table striped bordered hover responsive className={style.Table}>
                <thead>
                    <tr>
                        <th>Image</th>
                        <th >Name</th>
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
                                    <td>{employee.name.first + " " + employee.name.last}</td>
                                    <td>{employee.phone}</td>
                                    <td><a href={"mailto:" + employee.email}>{employee.email}</a></td>
                                    <td>{dateFormat(employee.dob.date, "paddedShortDate")}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
        </Container>
    )
}

export default DataTable;