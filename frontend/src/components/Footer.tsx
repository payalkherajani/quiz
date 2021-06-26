import { Container, Row, Col } from 'react-bootstrap';


const Footer = () => {
    return (
        <footer className="p-3 h-auto bg-primary mb-1" style={{ position: 'fixed', bottom: '0px', width: "100%" }}>
            <Container>
                <Row>
                    <Col className="text-center py-1 text-info">
                        <h4>Copyright &copy; Paheli 2021</h4>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;