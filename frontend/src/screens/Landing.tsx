import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import brain from '../assets/brain.png';
const Landing = () => {
    return (
        <Container className="text-center min-vh-100">
            <Row className="justify-content-center align-items-center min-vh-100">
                <Col xs="9">
                    <img src={brain} alt="landing" className="mw-100" />
                </Col>

                <Col xs="2">
                    <Button variant="primary">START</Button>
                </Col>

            </Row>
        </Container>
    );
};

export default Landing;