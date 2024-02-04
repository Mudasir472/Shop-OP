import "./BrandImages.css"

import BrandImages from "./BrandImages";
import brand1 from "../Images/brand-1.png"
import brand2 from "../Images/brand-2.png"
import brand3 from "../Images/brand-3.png"
import brand4 from "../Images/brand-4.png"
import brand5 from "../Images/brand-5.png"
import brand6 from "../Images/brand-6.png"
import brand7 from "../Images/brand-7.png"
import brand8 from "../Images/brand-8.png"
import brand9 from "../Images/brand-9.png"
import brand10 from "../Images/brand-10.png"
import brand11 from "../Images/brand-11.png"
import brand12 from "../Images/brand-12.png"


export default function(){
    return (
        <>
            <div className="container">
                <div className="brand 009">
                    <BrandImages brand1={brand1}/>
                    <BrandImages brand1={brand2}/>
                    <BrandImages brand1={brand3}/>
                    <BrandImages brand1={brand4}/>
                    <BrandImages brand1={brand5}/>
                    <BrandImages brand1={brand6}/>
                    <BrandImages brand1={brand7}/>
                    <BrandImages brand1={brand8}/>
                    <BrandImages brand1={brand9}/>
                    <BrandImages brand1={brand10}/>
                    <BrandImages brand1={brand11}/>
                    <BrandImages brand1={brand12}/>
                </div>
            </div>
        </>
    )
}