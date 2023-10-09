import './App.css';
import {Route, Router } from 'react-router-dom';
import Home from './components/home';
import Admin from './components/admin';

function App() {
  return (
   
    <Router>
    <Route path="/" element={<Home />} />
          <Route path="/admin" element={<Admin />} />
          </Router>
   
  );
}

export default App;
