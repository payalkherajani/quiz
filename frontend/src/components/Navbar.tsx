import React from 'react';
import { Navbar, Image } from 'react-bootstrap';
import puzzel from '../assets/puzzel2.png';

const NavbarComponent = () => {
    return (
        <Navbar bg="primary" variant="dark" className="p-2">
            <Navbar.Brand href="#home">
                <Image
                    alt=""
                    src={puzzel}
                    width="40"
                    height="40"
                    className="d-inline-block align-top"
                />{' '}
                PAHELI
            </Navbar.Brand>
        </Navbar>
    );
};


export default NavbarComponent;
