import { Link, Route, Routes } from 'react-router-dom';
import RegistroPage from './pages/RegistroPage';

import { publicRoutes } from './router';

function App() {

  return (
    <div>
      <Link to='/'>Home</Link>
      <br />
      <Link to='/registro'>Registro</Link>
      <br />
      <Routes>
        {publicRoutes.map((route) => <Route {...route} />)}
      </Routes>
    </div>
  );
}

export default App;
