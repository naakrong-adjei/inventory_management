import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Login } from '../auth/Login';
import { Signup } from '../auth/Signup';
import { Home } from '../pages/Home';

export const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home/:page?" element={<Home />} />
      </Routes>
    </Router>
  );
}


