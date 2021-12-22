import { useEffect } from 'react';
import { Jumbotron, Card, Row, Col, Container, ListGroup, Button, Image } from 'react-bootstrap';
import { useAppContext } from '../context/Context';
import { useParams } from 'react-router';

import {
    getQuizzess,
    getSingleCategoryDetails
} from '../services/categories.service';
import { ADD_SELECTED_QUIZ_QUESTIONS } from '../constants/constants';
import { Question } from '../types/types';
import { useNavigate } from 'react-router-dom';
import game from '../assets/game.svg';


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
        dispatch({ type: ADD_SELECTED_QUIZ_QUESTIONS, payload: { selectedQuizQuestions: ques, pointerOnQuestionNumber: 0 } });
        navigate(`/play/${id}`);
    };

    return (
        <>
            <Jumbotron className="bg-white">
                <Container fluid className="text-center">
                    <h1 className="mb-4">INSTRUCTIONS</h1>
                    <Row className="justify-content-center">
                        <Col className="shadow mb-3 mr-1 bg-white rounded" lg="4">
                            <Image src={game} alt="game" style={{ width: '100%' }} />
                        </Col>
                        <Col className="shadow mb-3 ml-1 bg-white rounded" lg="7">
                            <ListGroup className="p-5">
                                <ListGroup.Item variant="secondary text-left"><strong>There are total 6 questions, carrying equal weightage</strong></ListGroup.Item>
                                <ListGroup.Item variant="secondary text-left"><strong>For every correct answer, you will be rewarded 1 point</strong></ListGroup.Item>
                                <ListGroup.Item variant="secondary text-left"><strong>And Similary for every incorrect answer you will lose 1 point</strong></ListGroup.Item>
                                <ListGroup.Item variant="secondary text-left"><strong>There, is no time limit</strong></ListGroup.Item>
                            </ListGroup>
                        </Col>
                    </Row>

                </Container>
            </Jumbotron>

            <Row className="mb-5 justify-content-center" style={{ width: '100%' }} >
                {
                    quizData && quizData.map((data, index) => (
                        <Col key={data._id} className="mb-3" lg="4" style={{ width: '80%' }}>
                            <Card
                                bg={index % 2 === 0 ? 'danger' : 'info'}
                                text='white'
                                className="mb-2 ml-2 mr-2"
                                style={{ width: '100%', alignSelf: 'center' }}
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
