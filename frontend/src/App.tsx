import { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { Landing, Quizzes } from './screens';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { useAppContext } from './context/Context';
import { Footer } from './components';
import { getAllCategories } from './services/categories.service';


function App() {
  const { dispatch } = useAppContext();

  useEffect(() => {
    getAllCategories(dispatch);
  }, []);

  return (
    <Container fluid className="p-0 m-0">
      <Router>
        <Routes>
          <Route path="/landing" element={<Landing />} />
          <Route path={`/quizzess/:id`} element={<Quizzes />} />
        </Routes>
      </Router>
      <ToastContainer />
      <Footer />
    </Container>
  );
}

export default App;
