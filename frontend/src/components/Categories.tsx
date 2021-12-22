import { Row, Col, Button, Card } from 'react-bootstrap';
import { SELECTED_CATERGORY } from '../constants/constants';
import { useAppContext } from '../context/Context';
import { useNavigate } from 'react-router-dom';


const Categories = (): JSX.Element => {
    let navigate = useNavigate();
    const { state: { categories }, dispatch } = useAppContext();

    const clickHandler = (level: string, id: string) => {
        dispatch({ type: SELECTED_CATERGORY, payload: { selectedCategory: level, selectedCategoryID: id } });
        navigate(`/quizzess/${id}`);
    };

    return (
        <Row className="m-3">
            <>
                {
                    categories && categories.map((c) => {

                        return <Col key={c._id}>
                            <Card className="text-center">
                                <Card.Img variant="top" src={c.image} />
                                <Card.Body>
                                    <Button variant="primary" onClick={() => clickHandler(c.level, c._id)} className="text-uppercase" >{c.level}</Button>
                                </Card.Body>
                            </Card>
                        </Col>;
                    })
                }
            </>
        </Row>
    );
};

export default Categories;
