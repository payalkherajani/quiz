import { Container } from 'react-bootstrap';
import Landing from './screens/Landing';
import { Route } from 'react-router-dom';

function App() {
  return (
    <Container fluid className="p-0 m-0">
      <Route path="/landing" element={<Landing />} />
    </Container>
  );
}

export default App;
