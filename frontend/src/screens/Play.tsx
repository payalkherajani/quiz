import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../context/Context';
import { Button } from 'react-bootstrap';
import { INCREASE_POINTER_OF_QUESTION, UPDATE_TOTAL_SCORE } from '../constants/constants';

const Play = () => {

    const { state, dispatch } = useAppContext();
    const [show, setShow] = useState(false);
    const { selectedQuizQuestions, pointerOnQuestionNumber } = state;
    let navigate = useNavigate();
    const { chooseCategoryDetails: { selectedCategory, selectedCategoryID } } = state;

    useEffect(() => {
        //important -> Refresh of page has happened here
        if (selectedCategory === '' && selectedCategoryID === '') {
            navigate('/landing');
        }
    }, []);

    const checkmyAnswer = (correctValue: boolean) => {
        dispatch({ type: UPDATE_TOTAL_SCORE, payload: { score: correctValue ? selectedQuizQuestions[pointerOnQuestionNumber].points : selectedQuizQuestions[pointerOnQuestionNumber].negativemark } });
    };

    const nextQuestion = () => {
        dispatch({ type: INCREASE_POINTER_OF_QUESTION, payload: { pointer: pointerOnQuestionNumber + 1 } });
    };

    const showScore = () => {
        setShow(true);
    };

    return (
        <div>
            <div>{selectedQuizQuestions.length > 0 && selectedQuizQuestions.length > pointerOnQuestionNumber ? selectedQuizQuestions[pointerOnQuestionNumber].question : null}</div>
            <ul>
                {selectedQuizQuestions.length > 0 && selectedQuizQuestions.length > pointerOnQuestionNumber ? selectedQuizQuestions[pointerOnQuestionNumber].options.map((option) => {
                    return <li key={option._id} onClick={() => checkmyAnswer(option.isRight)}>{option.text}</li>;
                }) : null}
            </ul>
            {pointerOnQuestionNumber === 6 ? <Button onClick={showScore}> Check Your Score </Button> : <Button onClick={nextQuestion}>Next</Button>}

            {
                show === true ? (`Your Score is ${state.totalscore}`) : null
            }
        </div>
    );
};

export default Play;
