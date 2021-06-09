import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';


const Footer = () => {
    return (
        <Container>
            <Row>
                <Col className="text-center py-3 text-info">
                    <h4>Copyright &copy; Paheli 2021</h4>
                </Col>
            </Row>
        </Container>
    );
};

export default Footer;