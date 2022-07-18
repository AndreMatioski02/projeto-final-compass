import Home from 'pages/Home';
import Login from 'pages/Login';
import Cadastro from 'pages/Cadastro';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { UserProvider } from 'context/User';

export default function AppRouter() {
  return (
      <Router>
        <UserProvider >
          <Routes>
              <Route path="/" element={<Login />} />
              <Route path="cadastro" element={<Cadastro />} />
              <Route path="home" element={<Home />} />
            </Routes> 
        </UserProvider>       
      </Router>
  );
}