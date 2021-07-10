import React from 'react';
import { Navbar } from '../components';
import { Container, Row, Col, Image, Button, Table } from 'react-bootstrap';
import result from '../assets/result.svg';
import { useNavigate } from 'react-router';

const Score = () => {

    const navigate = useNavigate();

    const backToLandingPage = () => {
        navigate('/landing');
    };
    return (
        <div>
            <Navbar />
            <Button variant="primary" className="pl-5 pr-5 ml-5 mt-5" onClick={backToLandingPage}>BACK</Button>
            <h1 className="text-center">Scores</h1>
            <Container className="mt-2 p-2 d-flex flex-column align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
                <Row className="flex-column align-items-center" style={{ gap: '2rem' }}>
                    <Col lg="6">
                        <Image src={result} alt="no-page-exists-image" style={{ width: '90%', height: '100%' }} />
                    </Col>
                    <Col lg="6">
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Username</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>@fat</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Col>
                </Row>

            </Container>
        </div>
    );
};


export default Score;
