import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/home";
import Cart from "./components/cart";
import Admin from "./components/admin";
import Cart from "./components/cart";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
