import DesignProducts from "./DesignProducts";
import "./DesignProducts.css"
import img1 from "../Images/design-1.jpg"
import img2 from "../Images/design-2.jpg"
import img3 from "../Images/design-3.jpg"
import img4 from "../Images/design-4.jpg"
export default function ({ desc="Trendy Design" }) {
    return (
        <>
            <div className="design py-5 bg-body-tertiary">
                <div className="style-design">
                    <div className="container">
                        <div className="styleDesc">
                            <h3>{desc}</h3>
                        </div>
                        <div className="row">
                            <div className="designProduct">
                                <DesignProducts img1={img1} descc="Women's Shirt Dress" cost={`${9.99}$`} costt={`${6.99}$`}/>
                                <DesignProducts img1={img2} descc="Women's Shirt Dress" cost={`${9.99}$`} costt={`${6.99}$`}/>
                                <DesignProducts img1={img3} descc="Women's Shirt Dress" cost={`${9.99}$`} costt={`${6.99}$`}/>
                                <DesignProducts img1={img4} descc="Women's Shirt Dress" cost={`${9.99}$`} costt={`${6.99}$`}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}