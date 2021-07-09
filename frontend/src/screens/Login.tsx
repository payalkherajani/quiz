import {
    Container,
    Row,
    Col,
    Image,
    Form,
    Button
} from 'react-bootstrap';
import que from '../assets/que.svg';
import { Navbar } from '../components';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div>
            <Container fluid className="p-0">
                <Row className="flex-column m-0">
                    <Col className="p-0 mb-5">
                        <Navbar />
                    </Col>

                    <Col className="mb-5">
                        <Container fluid>
                            <Row className=" flex-column justify-content-center align-items-center">
                                <Col lg="4" md="4">
                                    <Image
                                        src={que}
                                        alt="login-image"
                                        className="login-question-image"

                                    />
                                </Col>
                                <Col lg="8" md="8">
                                    <h1 className="mb-4">LOGIN</h1>
                                    <Form>
                                        <Form.Group className="mb-4">
                                            <Form.Label>Email address</Form.Label>
                                            <Form.Control type="email" placeholder="Enter email" />
                                        </Form.Group>
                                        <Form.Group className="mb-4">
                                            <Form.Label>Password</Form.Label>
                                            <Form.Control type="password" placeholder="Password" />
                                        </Form.Group>
                                        <Button type="submit" className="pr-4 pl-4 mb-4">LOGIN</Button>
                                        <p>Don't have an account? <Link to='/register'> <span style={{ textDecoration: 'underline' }}>REGISTER</span></Link></p>
                                    </Form>
                                </Col>
                            </Row>
                        </Container>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Login;
