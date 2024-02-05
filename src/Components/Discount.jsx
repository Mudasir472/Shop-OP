import "./Discount.css";
import image from "../Images/Discount banner.png"
export default function (){
    return(
        <>
            <div className="container">
                <div className="discount">
                    <div className="image">
                        <img src={image} alt="" />
                    </div>
                    <h4>Get 20% Off Discount Coupon</h4>
                    <p>by Subscribe our Newsletter</p>
                    <div className="getDiscount">
                        <input type="text" placeholder="Enter Email"/>
                        <button>Get the Coupon</button>
                    </div>
                </div>
            </div>
        </>
    )
}