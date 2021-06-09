import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';


const Footer = () => {
    return (
        <footer>
            <Container>
                <Row>
                    <Col className="text-center py-3 text-info">
                        <h4>Copyright &copy; Paheli 2021</h4>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;