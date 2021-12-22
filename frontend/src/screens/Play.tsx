import React, { useEffect, useState, useRef, ParamHTMLAttributes } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAppContext } from '../context/Context';
import { Button } from 'react-bootstrap';
import { INCREASE_POINTER_OF_QUESTION, UPDATE_TOTAL_SCORE, UPDATE_USER_SCORE } from '../constants/constants';
import { Row, Col, Image, ListGroup } from 'react-bootstrap';
import { Navbar } from '../components';
import { updateUserScore } from '../services/users.service';
import { toast } from 'react-toastify';

const Play = () => {

    let navigate = useNavigate();
    const id = useParams();

    const { state, dispatch } = useAppContext();
    const [revealAnswer, setRevealAnswer] = useState(false);
    const [selectedOption, setSelectedOption] = useState('');

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

    const navigateToMyScores = async () => {
        const response = await updateUserScore(state.totalscore, id);
        if (response?.status! === 200) {
            navigate('/score');
        }
        else {
            const errorMessage = response.data.message;
            toast.error(errorMessage);
        }
    };

    console.log(state, "56");
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
                                        onClick={(e) => {
                                            checkmyAnswer(e, option.isRight);
                                            setSelectedOption(option.text);
                                        }}
                                        disabled={revealAnswer === true ? (true) : (false)}
                                        style={revealAnswer === true ? { backgroundColor: option.isRight ? ("green") : selectedOption === option.text ? ("red") : ("white") } : { backgroundColor: "white" }}
                                    >
                                        {option.text}
                                    </Button>
                                )) : null

                                }
                            </ListGroup>
                        </Col>
                        {pointerOnQuestionNumber === 5 ?
                            <Button onClick={navigateToMyScores}>
                                Check Your Score
                            </Button> :
                            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                                <Button onClick={nextQuestion} style={{ width: '40%' }}>Next</Button>
                                <Button style={{ width: '40%' }} onClick={nextQuestion}>Skip</Button>
                            </div>
                        }


                    </Row>
                </Col>
            </Row>
        </>

    );
};

export default Play;
