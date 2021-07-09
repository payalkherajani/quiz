import React, { useState } from 'react';
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
import { Link, useNavigate } from 'react-router-dom';
import { userLogin } from '../services/users.service';
import { toast } from 'react-toastify';

const Login = () => {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const { email, password } = formData;

    const onFormChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const onFormSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const response = await userLogin(formData);
        if (response.status === 200) {
            const { data: { token } } = response;
            localStorage.setItem('token', token);
            navigate('/landing');
        }
        else {
            const errorMessage = response.data.message;
            toast.error(errorMessage);
        }
    };

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

                                    <Form onSubmit={onFormSubmit}>

                                        <Form.Group className="mb-4">
                                            <Form.Label>Email address</Form.Label>
                                            <Form.Control
                                                type="email"
                                                placeholder="Enter email"
                                                name="email"
                                                value={email}
                                                onChange={onFormChangeHandler}
                                                required
                                            />
                                        </Form.Group>

                                        <Form.Group className="mb-4">
                                            <Form.Label>Password</Form.Label>
                                            <Form.Control
                                                type="password"
                                                placeholder="Password"
                                                name="password"
                                                value={password}
                                                onChange={onFormChangeHandler}
                                                required
                                            />
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
