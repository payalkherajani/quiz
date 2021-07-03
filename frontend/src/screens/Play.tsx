import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { createNull } from 'typescript';
import { useAppContext } from '../context/Context';

const Play = () => {

    const { state } = useAppContext();
    const { selectedQuizQuestions, pointerOnQuestionNumber } = state;
    let navigate = useNavigate();
    const { chooseCategoryDetails: { selectedCategory, selectedCategoryID } } = state;

    useEffect(() => {
        //important -> Refresh of page has happened here
        if (selectedCategory === '' && selectedCategoryID === '') {
            navigate('/landing');
        }
    }, []);

    return (
        <div>
            <div>Question: {selectedQuizQuestions.length > 0 ? selectedQuizQuestions[pointerOnQuestionNumber].question : null}</div>
            <ul>Options: {selectedQuizQuestions.length > 0 ? selectedQuizQuestions[pointerOnQuestionNumber].options.map((option) => {
                return <li key={option._id}>{option.text}</li>;
            }) : null} </ul>
            <button>Next</button>
        </div>
    );
};

export default Play;
