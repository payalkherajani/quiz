import React from 'react';
import { Container } from 'react-bootstrap';
import ani from '../assets/ani.gif';

const Landing = () => {
    return (
        <Container fluid>
            <img src={ani} alt="animated-gif" />
        </Container>
    );
};

export default Landing;