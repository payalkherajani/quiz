import React from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import { Navbar } from '../components';
import img from '../assets/404.svg';
import { useNavigate } from 'react-router';


const PageNotFound = () => {

    const navigate = useNavigate();

    const takeBack = () => {
        if (localStorage.getItem('token')) {
            navigate('/landing');
        }
        else {
            navigate('/');
        }
    };
    return (
        <div>
            <Navbar />
            <Container className="mt-5 p-5">
                <Row className="justify-content-center align-items-center">
                    <Col lg="8">
                        <Image src={img} alt="no-page-exists-image" style={{ width: '90%' }} />
                    </Col>
                    <Col lg="2">
                        <Button variant="primary" className="pl-5 pr-5" onClick={takeBack}>BACK</Button>
                    </Col>
                </Row>

            </Container>
        </div>
    );
};


export default PageNotFound;
