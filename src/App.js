import Design from "./Components/Design";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./views/home";
import Cart from "./views/cart";
import Profile from "./views/profile";

function App() {
  return (
    <>
       <Navbar/> 
       <ProductRowIst/>
       <Design/>
      {/* <Footer/>  */}
    </>
  );
}

export default App;
