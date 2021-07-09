import { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { Landing, Quizzes, Play, Login, Register, NoPageFound, Score } from './screens';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAppContext } from './context/Context';
import { Footer } from './components';
import { getAllCategories } from './services/categories.service';
import PrivateRoute from './routes/PrivateRoute';
import { getUserDetails } from './services/users.service';


function App() {
  const { state, dispatch } = useAppContext();
  console.log({ state });


  useEffect(() => {
    if (localStorage.getItem('token')) {
      getAllCategories(dispatch);
      getUserDetails(dispatch);
    }
  }, []);

  return (
    <Container fluid className="p-0 m-0">
      <Router>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <PrivateRoute path='/landing' element={<Landing />} />
          <PrivateRoute path={`/quizzess/:id`} element={<Quizzes />} />
          <PrivateRoute path={`/play/:id`} element={<Play />} />
          <PrivateRoute path={`/score`} element={<Score />} />
          <Route path="*" element={<NoPageFound />} />
        </Routes>
      </Router>
      <ToastContainer />
      <Footer />
    </Container>
  );
}

export default App;
