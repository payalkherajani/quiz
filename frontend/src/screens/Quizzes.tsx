import { useEffect, useState } from 'react';
import { Jumbotron, Card, Row, Col, Container, ListGroup, Button } from 'react-bootstrap';
import { useAppContext } from '../context/Context';
import { useParams } from 'react-router';

import {
    getQuizzess,
    getSingleCategoryDetails
} from '../services/categories.service';


const Quizzes = (): JSX.Element => {
    const { state, dispatch } = useAppContext();
    const { id } = useParams();
    const quizData = state.selectedCategoryQuizzess;

    useEffect(() => {
        getQuizzess(dispatch, id);
        getSingleCategoryDetails(dispatch, id);
    }, [dispatch, id]);


    return (
        <>
            <Jumbotron className="bg-white">
                <Container className="text-center">
                    <h1 className="mb-4">INSTRUCTIONS</h1>

                    <ListGroup className="mt-2">
                        <ListGroup.Item variant="">There are total 6 questions, carrying equal weightage</ListGroup.Item>
                        <ListGroup.Item variant="">For every correct answer, you will be rewarded 1 point</ListGroup.Item>
                        <ListGroup.Item variant="">And Similary for every incorrect answer you will lose 1 point</ListGroup.Item>
                        <ListGroup.Item variant="">There, is no time limit</ListGroup.Item>
                    </ListGroup>
                </Container>
            </Jumbotron>

            <Row className="m-0">
                {
                    quizData && quizData.map((data) => (
                        <Col key={data.quizname} className="mb-3">
                            <Card
                                bg='primary'
                                text='white'
                                className="mb-2"
                                style={{ width: '18rem' }}
                            >
                                <Card.Body>
                                    <Card.Title className="text-uppercase text-center">{data.quizname} </Card.Title>
                                    <Card.Body className="text-center">
                                        <Button variant="light">PLAY</Button>
                                    </Card.Body>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))
                }
            </Row>

        </>
    );
};



export default Quizzes;
