import ProductRowIst from "../Components/ProductRowIst";
import Design from "../Components/Design";
import Brands from "../Components/Brands";
import Offer from "../Components/Offer";

import img1 from "../Images/design-1.jpg"
import img2 from "../Images/design-2.jpg"
import img3 from "../Images/design-3.jpg"
import img4 from "../Images/design-4.jpg"

import img5 from "../Images/img5.jpg"
import img6 from "../Images/img6.jpg"
import img7 from "../Images/img7.jpg"
import img8 from "../Images/img8.jpg"


import img9 from "../Images/img9.jpg"
import img10 from "../Images/img10.jpg"
import img11 from "../Images/img11.jpg"
import img12 from "../Images/img12.jpg"
import Discount from "../Components/Discount";

// import Slider from "./Slider";



const Home = () => {
  return (
    <>
      <ProductRowIst />
      <Design desc="Trendy Design" img1={img1} img2={img2} img3={img3} img4={img4}/>
      <Brands/>
      <Offer/>
      <Design desc="New Arrival" img1={img5} img2={img6} img3={img7} img4={img8}/>
      <Design img1={img9} img2={img10} img3={img11} img4={img12}/>
      <Discount/>
      
    </>
  );
};
export default Home;
