import React from 'react';
import {
    Container,
    Row,
    Col,
    Image
} from 'react-bootstrap';

function About() {
    return (
        <>
            <Container fluid>
                <Row>
                    <Col className="my-auto">
                        <div>
                            <Image 
                                fluid
                                src="http://via.placeholder.com/600x400"
                            />
                        </div>
                    </Col>
                    <Col>
                        <h3>Header about text</h3>
                        <p>
                            For the past 20 years, we have specialized in selling Japanese furniture (tansu), architectural pieces, and decorative accessories.
                            By buying directly from Japan, we offer antiques rich with culture that can be brought into your home. These antiques range from timeless art pieces,
                            to well crafted tansu and ceramics that can still hold a purpose while telling a story of a unique past.
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h3>Header about text</h3>
                        <p>
                            Our warehouse is located in Southern California in the city of Los Alamitos. We hold four large warehouse shows in a calendar year, which follow our buying trips to Japan.
                            If you would like to receive an email newsletter with a notification of an upcoming show or event, please leave us your email address at the bottom and you will hear from us regularly.
                        </p>
                    </Col>
                    <Col className="my-auto">
                        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                            <Image 
                                fluid
                                src="http://via.placeholder.com/600x400"
                            />
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default About;