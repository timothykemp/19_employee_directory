import React from 'react';
import { Container, Table } from 'react-bootstrap';
import TableHead from '../TableHead';
import TableBody from '../TableBody';

function Directory({ employees }) {

    return (
        <Container fluid>
            <Table striped bordered hover>
                <TableHead />
                <TableBody employees={employees} />
            </Table>
        </Container>
    )
}

export default Directory;