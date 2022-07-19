import Home from 'pages/Home';
import Login from 'pages/Login';
import Cadastro from 'pages/Cadastro';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { UserLoginProvider } from 'context/UserLogin';
import { UserSignUpProvider } from 'context/UserSignUp';

export default function AppRouter() {
  return (
      <Router>
        <UserSignUpProvider >
          <UserLoginProvider >
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="cadastro" element={<Cadastro />} />
                <Route path="home" element={<Home />} />
              </Routes> 
          </UserLoginProvider>
        </UserSignUpProvider>               
      </Router>
  );
}