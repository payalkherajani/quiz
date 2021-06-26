import React from 'react';
import { Container, Row, Col, Button, Image, Badge, Card } from 'react-bootstrap';
import { SELECTED_LEVEL } from '../constants/constants';
import { useAppContext } from '../context/Context';
import { useNavigate } from 'react-router-dom';


const Categories = (): JSX.Element => {
    let navigate = useNavigate();
    const { state: { categories }, dispatch } = useAppContext();

    const clickHandler = (level: string) => {
        console.log("I am clicked");
        dispatch({ type: SELECTED_LEVEL, payload: { selectedLevel: level } });
        navigate(`/${level}/quizzess`);
    };

    return (
        <Row className="m-3">
            <>
                {
                    categories && categories.map((c) => {

                        return <Col key={c._id}>
                            <Card className="text-center">
                                <Card.Img variant="top" src={c.image} />
                                <Card.Body>
                                    <Button variant="primary" onClick={() => clickHandler(c.level)} className="text-uppercase" >{c.level}</Button>
                                </Card.Body>
                            </Card>
                        </Col>;
                    })
                }
            </>
        </Row>
    );
};

export default Categories;
