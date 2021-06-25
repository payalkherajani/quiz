import React from 'react';
import { Container, Row, Col, Button, Image, Badge, Card } from 'react-bootstrap';
import { useAppContext } from '../context/Context';
import { Category } from '../types/types';


const Categories = (): JSX.Element => {

    const { state: { categories } } = useAppContext();

    return (
        <Row>
            <>
                {
                    categories && categories.map((c: Category) => {

                        return <Col key={c._id}>
                            <Card className="bg-dark text-center">
                                <Card.Img src={c.image} alt="Card image" />
                                <Card.ImgOverlay>
                                    <Card.Title>{c.level}</Card.Title>
                                    <Button>PLAY</Button>
                                </Card.ImgOverlay>
                            </Card>
                        </Col>;
                    })
                }
            </>
        </Row>
    );
};



export default Categories;
