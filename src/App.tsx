import { useContext } from 'react';
import './App.css';
import { Route, Routes, Link } from 'react-router-dom';
import { Home } from './pages/Home';

import { RequireAuth } from './contexts/Auth/RequireAuth';
import { AuthContext } from './contexts/Auth/AuthContext';
import { Login } from './pages/Login';
import { Register } from './pages/Register';

function App() {
  const auth = useContext(AuthContext);

  const handleLogout = async () => {
    await auth.signout();
    window.location.href = window.location.href;
  }

  return (
    <div className="App">
      <header>
        <nav className="navbar">
        <h1>Star-Wars Project</h1>
            <div className="container d-flex justify-content-center">
          <Link to="/">Home</Link>
          <Link to="/Login">Login</Link>
          <Link to='/Register'> </Link>
          {auth.user && <button onClick={handleLogout}>Sair</button>}
          </div>
        </nav>
      </header>
      <hr />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<RequireAuth><Login /></RequireAuth>} />
        <Route path="/Register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
