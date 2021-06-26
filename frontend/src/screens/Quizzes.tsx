import { useEffect } from 'react';
import { Jumbotron } from 'react-bootstrap';
import { useAppContext } from '../context/Context';
import { useParams } from 'react-router';
import { getQuizzess } from '../services/categories.service';

const Quizzes = (): JSX.Element => {
    const { state, dispatch } = useAppContext();
    const { id } = useParams();

    useEffect(() => {
        getQuizzess(dispatch, id);
    }, []);

    return (
        <>
            <Jumbotron>
                <h1>Let's Begin the Fun</h1>
                <p>
                    Are You Ready?
                </p>
            </Jumbotron>
        </>
    );
};



export default Quizzes;
