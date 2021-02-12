import React from 'react';
import { Container, Jumbotron } from 'react-bootstrap';
import Wrapper from '../Wrapper';

function Header() {
    return (
        <Wrapper>
            <Jumbotron>
                <Container>
                    <h1>Employee Directory</h1>
                    <p>
                        Click on column headings to sort the directory by selected column, or use the search box to filter your results.
            </p>
                </Container>
            </Jumbotron>
        </Wrapper>
    );
}

export default Header;
