import React from 'react';
import { Container, Row, Col, Button, Image, Badge, Card } from 'react-bootstrap';
import { SELECTED_LEVEL } from '../constants/constants';
import { useAppContext } from '../context/Context';
import { Navigate } from 'react-router-dom';


const Categories = (): JSX.Element => {

    const { state: { categories }, dispatch } = useAppContext();

    const onClickSelectLevel = () => {
        console.log("I am clicked");
        // dispatch({ type: SELECTED_LEVEL, payload: { selectedLevel: level } });
        // <Navigate to={`/${level}/quizzess`} />;
    };

    return (
        <Row>
            <>
                {
                    categories && categories.map((c) => {

                        return <Col key={c._id} className="m-2">
                            <Card className="bg-dark text-center pb-2">
                                <Card.Img src={c.image} alt="Card image" />
                                <Card.ImgOverlay>
                                </Card.ImgOverlay>
                                <Button variant="secondary" onClick={onClickSelectLevel}>{c.level}</Button>
                            </Card>
                        </Col>;
                    })
                }
            </>
        </Row>
    );
};



export default Categories;
