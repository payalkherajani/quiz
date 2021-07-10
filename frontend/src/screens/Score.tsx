import React, { useEffect } from 'react';
import { Navbar } from '../components';
import { Container, Row, Col, Image, Button, Table } from 'react-bootstrap';
import result from '../assets/result.svg';
import { useNavigate } from 'react-router';
import { useAppContext } from '../context/Context';
import { UPDATE_USER_SCORE } from '../constants/constants';
import { scoreDetails } from '../services/users.service';
import { toast } from 'react-toastify';

const Score = () => {

    const navigate = useNavigate();
    const { state, dispatch } = useAppContext();

    const getScoreDetailsforLoggedInUser = async () => {
        const response = await scoreDetails();
        if (response.status === 200) {
            dispatch({ type: UPDATE_USER_SCORE, payload: { scoreDetails: response.data.scoredetails } });  // need response here
        }
        else {
            const errorMessage = response.data.message;
            toast.error(errorMessage);
        }
    };

    useEffect(() => {
        getScoreDetailsforLoggedInUser();
    }, []);

    const backToLandingPage = () => {
        navigate('/landing');
    };
    const { scoreDetailsOfUser } = state;
    return (
        <div>
            <Navbar />
            <Button variant="primary" className="pl-5 pr-5 ml-5 mt-5" onClick={backToLandingPage}>BACK</Button>
            <h1 className="text-center">Scores</h1>
            <Container className="mt-2 p-2 d-flex flex-column align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
                <Row className="flex-column align-items-center" style={{ gap: '2rem' }}>
                    <Col lg="6">
                        <Image src={result} alt="no-page-exists-image" style={{ width: '90%', height: '100%' }} />
                    </Col>
                    <Col lg="6">
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>S.No</th>
                                    <th>Level</th>
                                    <th>QuizName</th>
                                    <th>Score</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    scoreDetailsOfUser.map((s: any, index: number) => {
                                        return <tr>
                                            <td>{index + 1}</td>
                                            <td>{s?.quiz.category.level}</td>
                                            <td>{s?.quiz.quizname}</td>
                                            <td>{s.score}</td>
                                        </tr>;
                                    })
                                }
                            </tbody>
                        </Table>
                    </Col>
                </Row>

            </Container>
        </div>
    );
};


export default Score;
