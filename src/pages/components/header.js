import React from 'react';
import { 
    Nav, 
    Navbar,
    Container,
    Row,
    Col,
    Image
} from 'react-bootstrap';

function Header() {
    return (
        <>
            <Navbar bg='light' expand='lg'>
                <Navbar.Brand href='#home'><img src='/images/logo_hanko.gif' alt='GenKai' /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse>
                    <Nav>
                        <Nav.Item>
                            <Nav.Link href="#about">About</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="#dates">Show Dates</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="#contact">Contact</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <Container fluid style={{ height: 800 }}>
                <Row style={{ height: '100%' }}>
                    <Col className="my-auto">
                        <h2>GENKAI</h2>
                        <h2>Japanese Antiques</h2>
                    </Col>
                    <Col>
                        <Image 
                            fluid
                            alt="960x700"
                            src="http://via.placeholder.com/960x700"
                        />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Header;
