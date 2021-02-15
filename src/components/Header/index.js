// Importing required components and modules
import React from 'react';
import { Container, Jumbotron } from 'react-bootstrap';
import style from './style.module.css';

// Build page header
function Header() {
    return (
        <Jumbotron className={style.Jumbotron}>
            <Container>
                <h1>Employee Directory</h1>
                <p>
                    Click on arrow by first or last name to sort the directory by selected column, or use the search box to filter your results.
            </p>
            </Container>
        </Jumbotron>
    );
}

export default Header;
