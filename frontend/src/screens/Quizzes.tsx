import { useEffect } from 'react';
import { Jumbotron, Card, Row, Col, Container, ListGroup, Button } from 'react-bootstrap';
import { useAppContext } from '../context/Context';
import { useParams } from 'react-router';

import {
    getQuizzess,
    getSingleCategoryDetails
} from '../services/categories.service';
import { ADD_SELECTED_QUIZ_QUESTIONS } from '../constants/constants';
import { Question } from '../types/types';
import { useNavigate } from 'react-router-dom';


const Quizzes = (): JSX.Element => {
    const { state, dispatch } = useAppContext();
    const { id } = useParams();
    const quizData = state.selectedCategoryQuizzess;
    let navigate = useNavigate();

    useEffect(() => {
        getQuizzess(dispatch, id);
        getSingleCategoryDetails(dispatch, id);
    }, [dispatch, id]);

    const playHandler = (ques: Question[], id: string) => {
        dispatch({ type: ADD_SELECTED_QUIZ_QUESTIONS, payload: { selectedQuizQuestions: ques } });
        navigate(`/play/${id}`);
    };

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
                        <Col key={data._id} className="mb-3">
                            <Card
                                bg='primary'
                                text='white'
                                className="mb-2"
                                style={{ width: '18rem' }}
                            >
                                <Card.Body>
                                    <Card.Title className="text-uppercase text-center">{data.quizname} </Card.Title>
                                    <Card.Body className="text-center">
                                        <Button variant="light" onClick={() => playHandler(data.questions, data._id)}>PLAY</Button>
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
