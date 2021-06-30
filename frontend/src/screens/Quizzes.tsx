import { useEffect } from 'react';
import { Jumbotron, Card, Row, Col } from 'react-bootstrap';
import { useAppContext } from '../context/Context';
import { useParams } from 'react-router';

import {
    getQuizzess,
    getSingleCategoryDetails
} from '../services/categories.service';

const Quizzes = (): JSX.Element => {
    const { dispatch } = useAppContext();
    const { id } = useParams();

    useEffect(() => {
        getQuizzess(dispatch, id);
        getSingleCategoryDetails(dispatch, id);
    }, [dispatch, id]);

    return (
        <>
            <Jumbotron>
                <h1>Instructions</h1>
                <ul>
                    <li>There are total 6 questions, carrying equal weightage</li>
                    <li>For every correct answer, you will be rewarded 1 point</li>
                    <li>And Similary for every incorrect answer you will lose 1 point</li>
                    <li>There, is no time limit</li>
                </ul>
            </Jumbotron>

            <Row>
                {
                    [
                        'Primary',
                        'Secondary',
                        'Success',
                        'Danger',
                        'Warning',
                        'Info',
                        'Light',
                        'Dark',
                    ].map((variant, idx) => (
                        <Col key={idx} className="mb-3">
                            <Card
                                bg={variant.toLowerCase()}
                                text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
                                className="mb-2"
                                style={{ width: '18rem' }}
                            >
                                <Card.Header>Header</Card.Header>
                                <Card.Body>
                                    <Card.Title>{variant} Card Title </Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk
                                        of the card's content.
                                    </Card.Text>
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
