import React from 'react';
import { Container, Row, Col, Button, Image, Badge, Card } from 'react-bootstrap';
import { Categories, Footer } from '../components';


const Landing = () => {
    return (
        <Container fluid className="p-0 m-0">
            <Row className="flex-column m-0">
                <Col className="wrapper mb-3">
                    <Container className="d-flex align-items-end flex-column justify-content-center">
                        <h1 className="text-primary">PAHELI</h1>
                        <h5 className="text-info">#BujhoToJane</h5>
                    </Container>
                </Col>

                <Col className="mb-3">
                    <Categories />
                </Col>

                <Col>
                    <Footer />
                </Col>
            </Row>
        </Container>
    );
};

export default Landing;