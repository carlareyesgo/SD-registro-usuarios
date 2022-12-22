import { Container } from 'react-bootstrap';
import { Link, Route, Routes } from 'react-router-dom';
import NavbarComponent from './components/Navbar';
import RegistroPage from './pages/RegistroPage';

import { publicRoutes } from './router';

function App() {

  return (
    <>
      <NavbarComponent />
      <Container >
        <Routes>
          {publicRoutes.map((route) => <Route {...route} />)}
        </Routes>
      </Container>
    </>
  );
}

export default App;
