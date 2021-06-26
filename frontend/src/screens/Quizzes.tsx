import { Jumbotron } from 'react-bootstrap';
import { useAppContext } from '../context/Context';

const Quizzes = (): JSX.Element => {
    const { state, dispatch } = useAppContext();

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
