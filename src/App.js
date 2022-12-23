import { Container } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
import NavbarComponent from './components/Navbar';

import { publicRoutes } from './router';

function App() {

  return (
    <>
      <NavbarComponent />
      <Container >
        <Routes>
          {publicRoutes.map((route, index) => <Route key={index} {...route} />)}
        </Routes>
      </Container>
    </>
  );
}

export default App;
