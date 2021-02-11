import React from 'react';
import { Table } from 'react-bootstrap';
import TableHead from '../TableHead';
import TableBody from '../TableBody';
import Container from '../Container';

function Directory({ employees }) {

    return (
        <Container>
            <Table striped bordered hover>
                <TableHead />
                <TableBody employees={employees} />
            </Table>
        </Container>
    )
}

export default Directory;