import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button, Image, Badge, Card } from 'react-bootstrap';
import { Categories, Footer, Carousel } from '../components';
import { getAllCategories } from '../services/categories.service';
import { useAppContext } from '../context/Context';


const Landing = (): JSX.Element => {

    const { dispatch } = useAppContext();

    useEffect(() => {
        getAllCategories(dispatch);
    }, []);

    return (
        <Container fluid className="p-0 m-0">
            <Row className="flex-column m-0">
                {/* <Col className="mb-3" >
                    <Carousel />
                </Col> */}

                <Col className="mb-3">
                    <Categories />
                </Col>

                {/* <Col className="p-5 h-auto bg-primary mb-1">
                    <Footer />
                </Col> */}
            </Row>
        </Container>
    );
};

export default Landing;

