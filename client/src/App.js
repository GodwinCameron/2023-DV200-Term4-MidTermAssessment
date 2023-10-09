import './App.css';
import {Route, Routes } from 'react-router-dom';
import Home from './components/home';
import Admin from './components/admin';

function App() {
  return (
   
    <Routes>
    <Route path="/" element={<Home />} />
          <Route path="/admin" element={<Admin />} />
          </Routes>
   
  );
}

export default App;
