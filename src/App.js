import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./views/home";
import Cart from "./views/cart";
import Profile from "./views/profile";
import Offer from "./Components/Offer";
import Contact from "./views/Contact";
import Blog from "./views/Blog";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/Shop-OP" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/Contact' element={<Contact/>} />
        <Route path='/Blog' element={<Blog/>} />
      </Routes>
      
      <Footer />
    </Router>
  );
}
export default App;