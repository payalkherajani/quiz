import React, { useEffect } from 'react';
import { Container, Row, Col, Button, Image, Badge, Card } from 'react-bootstrap';
import { Categories, Footer } from '../components';
import { getAllCategories } from '../services/categories.service';



const Landing = () => {

    useEffect(() => {
        getAllCategories();
    }, []);

    return (
        <Container fluid className="p-0 m-0">
            <Row className="flex-column m-0">
                <Col className="wrapper mb-3">
                    <Row>
                        <Col className="position-absolute fixed-bottom text-right">
                            <h1 className="text-primary">PAHELI</h1>
                            <h5 className="text-info">#BujhoToJane</h5>
                        </Col>
                    </Row>

                </Col>

                <Col className="mb-3">
                    <Categories />
                </Col>

                <Col className="m-0 p-5 h-auto bg-primary mb-1">
                    <Footer />
                </Col>
            </Row>
        </Container>
    );
};

export default Landing;