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

                        return <Col key={c._id} className="m-2">
                            <Card className="bg-dark text-center pb-2">
                                <Card.Img src={c.image} alt="Card image" />
                                <Card.ImgOverlay>
                                </Card.ImgOverlay>
                                <Button variant="secondary">{c.level}</Button>
                            </Card>
                        </Col>;
                    })
                }
            </>
        </Row>
    );
};



export default Categories;
