import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Login } from './auth/Login';
import { Signup } from './auth/Signup';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;
