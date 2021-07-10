import { Navbar, Image, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import puzzel from '../assets/puzzel2.png';
import { useAppContext } from '../context/Context';

const NavbarComponent = () => {

    const { state } = useAppContext();

    const navigate = useNavigate();

    const logoutUser = () => {
        localStorage.removeItem('token');
        navigate('/');
    };

    return (
        localStorage.getItem('token') ? (
            <Navbar bg="primary" variant="dark" className="p-2 justify-content-between" sticky="top" >
                <Navbar.Brand href="#home">
                    <Image
                        alt=""
                        src={puzzel}
                        width="40"
                        height="40"
                        className="d-inline-block align-top"
                    />{' '}
                    <strong>PAHELI</strong>
                </Navbar.Brand>
                <h1 className="text-white">Welcome {state.user.name}</h1>
                <Button onClick={logoutUser}><i className="fas fa-sign-out-alt"></i></Button>
            </Navbar>
        ) : (
            <Navbar bg="primary" variant="dark" className="p-2">
                <Navbar.Brand href="#home">
                    <Image
                        alt=""
                        src={puzzel}
                        width="40"
                        height="40"
                        className="d-inline-block align-top"
                    />{' '}
                    <strong>PAHELI</strong>
                </Navbar.Brand>
            </Navbar>
        )

    );
};


export default NavbarComponent;
