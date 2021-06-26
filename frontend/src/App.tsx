import { Container } from 'react-bootstrap';
import { Landing, Quizzes } from './screens';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { useAppContext } from './context/Context';
import { Footer } from './components';

function App() {
  const { state } = useAppContext();
  console.log({ state });

  return (
    <Container fluid className="p-0 m-0">
      <Router>
        <Routes>
          <Route path="/landing" element={<Landing />} />
          <Route path={`/${state.selectedLevel}/quizzess`} element={<Quizzes />} />
        </Routes>
      </Router>
      <ToastContainer />
      <Footer />
    </Container>
  );
}

export default App;
