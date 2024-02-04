import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./views/home";
import Cart from "./views/cart";
import Profile from "./views/profile";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path='/profile' element={<Profile/>}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
