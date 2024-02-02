import banner1 from "../Images/Banner1.png"
import banner2 from "../Images/banner-2.png"
import banner3 from "../Images/banner-3.png"
import BestQuality from "./BestQuality"
import MainProjectItem from "./MainProjectItem"
import "./ProductRowIst.css"
export default function ({ }) {
    return (
        <>
            <div className="container ">
                <div className="row">
                    <div className="product py-5">
                        <MainProjectItem banner={banner1} backColor={`hsl(${186}, ${62}%, ${80}%)`} forGender="Boys Style" desc="Best Styles for all
Boys" />
                        <MainProjectItem banner={banner2} backColor={`rgb(${194} ${215} ${240})`} forGender="Girl Style" desc="Best Styles for all
Girls"/>
                        <MainProjectItem banner={banner3} backColor={`rgb(${254} ${231} ${196})`} forGender="Bache Style" desc="Best Styles for all
Chilrens"/>
                    </div>
                </div>
                <BestQuality/>
            </div>

        </>
    )
}