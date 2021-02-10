import React from 'react';
import { Table } from 'react-bootstrap';
import TableBody from '../TableBody';
import Container from '../Container';

function Directory({ employees }) {

    return (
        <Container>
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
                <TableBody employees={employees} />
            </Table>
        </Container>
    )
}

export default Directory;