import { useEffect } from 'react';
import { Container, Row, Col, } from 'react-bootstrap';
import { Categories, Carousel } from '../components';
import { getAllCategories } from '../services/categories.service';
import { useAppContext } from '../context/Context';
import { Navbar } from '../components';


const Landing = (): JSX.Element => {

    const { dispatch } = useAppContext();

    useEffect(() => {
        getAllCategories(dispatch);
    }, []);

    return (
        <Container fluid className="p-0 m-0">
            <Navbar />
            <Row className="flex-column m-0">
                <Col className="mb-3" >
                    <Carousel />
                </Col>

                <Col className="mb-3">
                    <Categories />
                </Col>
            </Row>
        </Container>
    );
};

export default Landing;

