import DesignProducts from "./DesignProducts";
import "./DesignProducts.css"
export default function ({ desc="",img1,img2,img3,img4 }) {
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