import React, { useState } from 'react';
import { Navbar } from '../components';
import { Link, useNavigate } from 'react-router-dom';
import {
    Container,
    Row,
    Col,
    Image,
    Form,
    Button,
} from 'react-bootstrap';
import addUser from '../assets/add_user.svg';
import { registerNewUser } from '../services/users.service';
import { toast } from 'react-toastify';

const Register = (): JSX.Element => {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmpassword: ''
    });

    const { name, email, password, confirmpassword } = formData;

    const onFormSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (formData.password === formData.confirmpassword) {
            const response = await registerNewUser(formData);
            if (response.status === 200) {
                toast.success("Registration Successfull");
                navigate('/');
            }
            else {
                const errorMessage = response.data.message;
                toast.error(errorMessage);
            }
        }
        else {
            toast.error(`Passwords doesn't match`);
        }

    };

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
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

                            <Row className="justify-content-center align-items-center">
                                <Col lg="8" md="8">
                                    <h1 className="mb-4">REGISTER</h1>

                                    <Form onSubmit={onFormSubmit}>

                                        <Form.Group className="mb-4">
                                            <Form.Label>Name</Form.Label>
                                            <Form.Control
                                                type="text"
                                                placeholder="Enter name"
                                                value={name}
                                                name="name"
                                                onChange={onChangeHandler}
                                                required

                                            />
                                        </Form.Group>

                                        <Form.Group className="mb-4">
                                            <Form.Label>Email address</Form.Label>
                                            <Form.Control
                                                type="email"
                                                placeholder="Enter email"
                                                value={email}
                                                name="email"
                                                onChange={onChangeHandler}
                                                required
                                            />
                                        </Form.Group>

                                        <Form.Group className="mb-4">
                                            <Form.Label>Password</Form.Label>
                                            <Form.Control
                                                type="password"
                                                placeholder="Password"
                                                value={password}
                                                name="password"
                                                onChange={onChangeHandler}
                                                required
                                            />
                                        </Form.Group>

                                        <Form.Group className="mb-4">
                                            <Form.Label>Confirm Password</Form.Label>
                                            <Form.Control
                                                type="password"
                                                placeholder="Password"
                                                value={confirmpassword}
                                                name="confirmpassword"
                                                onChange={onChangeHandler}
                                                required
                                            />
                                        </Form.Group>

                                        <Button
                                            type="submit"
                                            className="pr-4 pl-4 mb-4"
                                        >
                                            REGISTER
                                        </Button>

                                        <p>
                                            Already have an account?
                                            <Link to='/'>
                                                <span style={{ textDecoration: 'underline' }}>
                                                    LOGIN
                                                </span>
                                            </Link>
                                        </p>
                                    </Form>
                                </Col>

                                <Col lg="4" md="4">
                                    <Image
                                        src={addUser}
                                        alt="login-image"
                                        className="login-question-image"

                                    />
                                </Col>
                            </Row>
                        </Container>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};



export default Register;
