import Navbar from "./Navbar";
import logo from "../Images/logo-4.svg"
import paymentImage from "../Images/payment-getways.png";
import "./Footer.css"

export default function () {
    return (
        <>
            <div class="container">
                <footer class="line-height-3 row row-cols-1 row-cols-sm-2 row-cols-md-4 py-5 my-5 border-top">
                    <div class="col mb-3 displayFlex">
                        <a href="/" class="d-flex align-items-center mb-3 link-body-emphasis text-decoration-none">
                            <img src={logo} alt="" />
                            {/* logo here */}
                        </a>
                        <p class="text-body-secondary"></p>
                        <ul class="nav flex-column">
                            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary hover-underline">Track Order</a></li>
                            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Delivery & Returns</a></li>
                            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Warranty</a></li>
                        </ul>
                    </div>

                    <div class="col mb-3 displayFlex">
                        <h5>About us</h5>
                        <ul class="nav flex-column">
                            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Rave,s Story</a></li>
                            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Work With Us</a></li>
                            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Coporate News</a></li>
                            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Investors</a></li>
                        </ul>
                    </div>

                    <div class="col mb-3 displayFlex">
                        <h5>Online Shop</h5>
                        <ul class="nav flex-column">
                            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Furniture</a></li>
                            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Decoration</a></li>
                            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Kitchen</a></li>
                            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Interior</a></li>
                        </ul>
                    </div>

                    <div class="col mb-3 displayFlex">
                        <h5>Useful Links</h5>
                        <ul class="nav flex-column">
                            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Secure Payment
                            </a></li>
                            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Privacy Policy</a></li>
                            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Terms of Use</a></li>
                            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Archived Products</a></li>
                        </ul>
                    </div>
                </footer>
                <div className="footFooter d-flex justify-content-between align-items-center border-top">
                    <div class="d-flex socialAndOther flex-column flex-sm-row  py-4 my-4">
                        <div className="social">
                            <ul class="list-unstyled d-flex px-3">
                                <li class="ms-3"><a class="link-body-emphasis" href="#"><i class="bi bi-facebook"></i></a></li>
                                <li class="ms-3"><a class="link-body-emphasis" href="#"><i class="bi bi-instagram"></i></a></li>
                                <li class="ms-3"><a class="link-body-emphasis" href="#"><i class="bi bi-youtube"></i></a></li>
                                {/* <img src={paymentImage} alt="" /> */}
                            </ul>

                            <p>© 2022 <a style={{ textDecoration: "none", color: "pink" }} href="#"><b>Quomodosoft</b></a> All rights reserved</p>
                        </div>
                    </div>
                    <div className="payments">
                        <img src={paymentImage} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}