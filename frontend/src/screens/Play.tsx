import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../context/Context';
import { Button } from 'react-bootstrap';
import { INCREASE_POINTER_OF_QUESTION, UPDATE_TOTAL_SCORE } from '../constants/constants';
import { Row, Col, Image, ListGroup } from 'react-bootstrap';
import { Navbar } from '../components';

const Play = () => {

    let navigate = useNavigate();

    const { state, dispatch } = useAppContext();
    const [revealAnswer, setRevealAnswer] = useState(false);

    const { selectedQuizQuestions, pointerOnQuestionNumber } = state;
    const { chooseCategoryDetails: { selectedCategory, selectedCategoryID } } = state;


    useEffect(() => {
        //important -> Refresh of page has happened here
        if (selectedCategory === '' && selectedCategoryID === '') {
            navigate('/landing');
        }
    }, []);

    const checkmyAnswer = (e: React.MouseEvent, correctValue: boolean) => {
        e.stopPropagation();
        dispatch({ type: UPDATE_TOTAL_SCORE, payload: { score: correctValue ? selectedQuizQuestions[pointerOnQuestionNumber].points : selectedQuizQuestions[pointerOnQuestionNumber].negativemark } });
        setRevealAnswer(true);
    };

    const nextQuestion = () => {
        dispatch({ type: INCREASE_POINTER_OF_QUESTION, payload: { pointer: pointerOnQuestionNumber + 1 } });
        setRevealAnswer(false);
    };

    const navigateToMyScores = () => {
        navigate('/');   //change to user Scores
    };
    return (
        <>
            <Navbar />
            <Row className="p-2 justify-content-center align-items-center m-0" style={{ minHeight: '100vh' }}>
                <Col lg="6">
                    <Image
                        src={selectedQuizQuestions.length > 0 && selectedQuizQuestions.length > pointerOnQuestionNumber ? (selectedQuizQuestions[pointerOnQuestionNumber].image) : undefined}
                        alt="game" style={{ width: '100%' }}
                    />
                </Col>
                <Col lg="6">

                    <Row className="flex-column">

                        <Col className="pl-5">
                            <strong>
                                Question: {pointerOnQuestionNumber + 1} {selectedQuizQuestions.length > 0 && selectedQuizQuestions.length > pointerOnQuestionNumber ? selectedQuizQuestions[pointerOnQuestionNumber].question : null}
                            </strong>
                        </Col>


                        <Col>
                            <ListGroup className="p-5">
                                {selectedQuizQuestions.length > 0 && selectedQuizQuestions.length > pointerOnQuestionNumber ? selectedQuizQuestions[pointerOnQuestionNumber].options.map((option) => (

                                    <Button
                                        variant="info"
                                        className="mb-2 p-3"
                                        key={option._id}
                                        onClick={(e) => checkmyAnswer(e, option.isRight)}
                                        style={revealAnswer === true ? { backgroundColor: option.isRight ? "green" : "red" } : { backgroundColor: "white" }}
                                    >
                                        {option.text}
                                    </Button>
                                )) : null

                                }
                            </ListGroup>
                        </Col>
                        {pointerOnQuestionNumber === 5 ? <Button onClick={navigateToMyScores}> Check Your Score </Button> : <Button onClick={nextQuestion}>Next</Button>}


                    </Row>
                </Col>
            </Row>
        </>

    );
};

export default Play;
