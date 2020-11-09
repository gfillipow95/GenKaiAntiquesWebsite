import React from 'react';
import {
    Container,
    Row,
    Col
} from 'react-bootstrap';

function showDates() {
    return (
        <>
            <Container fluid>
                <Row>
                    <Col md={{ span: 6, offset: 3 }} style={{ background: '#000'}}>
                        Show Dates
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default showDates;