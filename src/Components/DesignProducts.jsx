import { useState } from "react"
import "./BestQuality.css"

export default function ({ img1, descc, cost, costt, idx }) {
    const [isShown, setIsShown] = useState(false)
    const [isAdded, setIsAdded] = useState(false)
    let update = ()=>{
        
    }
    return (
        <>
            <div className="designItems">
                <div className="designImage" 
                    onMouseEnter={() => setIsShown(true)}
                    onMouseLeave={() => setIsShown(false)}>
                    <img src={img1} alt="" />
                    {isShown && (
                        <div onClick={()=>setIsAdded(true)} className="shopIt">
                            {isAdded ? <span> <i class="bi bi-check2"></i>Added</span>
                             : 
                            <span className="d-flex align-items-center justify-content-evenly"><i class="bi bi-bag"></i><span> Add to Cart</span></span> }
                            {/* <span> <i class="bi bi-bag"></i></span> */}
                            
                        </div>
                    )}
                </div>
                <div className="designDesc">
                    <h5>{descc}</h5>
                    <div className="cost">
                        <p style={{ color: "grey" }}>{cost}</p>
                        <p style={{ paddingLeft: "30px", color: "red" }}>{costt}</p>
                    </div>
                </div>
            </div>
        </>
    )
}