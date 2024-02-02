import "./ProductRowIst.css"
export default function  ({ banner,backColor,forGender,desc}) {
    return (
        <>
            <div style={{backgroundColor : backColor}} className="product1">
                <img src={banner} alt="" />
                <div className="productDesc">
                    <p>{forGender}</p>
                    <h2>{desc}</h2>
                    <div className="but">
                        <a style={{textDecoration:"none",color:"black"}} href="#"><span>Shop Now</span></a>
                    </div>
                </div>
            </div>
        </>
    )
}