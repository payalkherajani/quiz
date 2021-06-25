import React from 'react';
import { Container, Row, Col, Button, Image, Badge, Card } from 'react-bootstrap';
import { useAppContext } from '../context/Context';
import { Category } from '../types/types';


const Categories = (): JSX.Element => {

    const { state: { categories } } = useAppContext();

    return (
        <Row>
            <Col>
                {
                    categories && categories.map((c: Category, index) => {
                        return <Card className="bg-dark text-white" key={c._id}>
                            <Card.Img src="holder.js/100px270" alt="Card image" />
                            <Card.ImgOverlay>
                                <Card.Title>{c.level}</Card.Title>
                                <Card.Text>
                                    This is a wider card with supporting text below as a natural lead-in to
                                    additional content. This content is a little bit longer.
                                </Card.Text>
                                <Card.Text>Last updated 3 mins ago</Card.Text>
                            </Card.ImgOverlay>
                        </Card>;
                    })
                }
            </Col>
        </Row>
    );
};



export default Categories;
