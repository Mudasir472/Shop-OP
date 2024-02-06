
import "./Contact.css"
export default function () {
    return (
        <>
            <div className="contactLeft d-flex flex-column">
                <div className="heading margin-30px">
                    <h3>Contact Information</h3>
                    <h6>Fill the form or write us .We will help you as soon as possible.</h6>
                </div>
                <div className="phoneEmail margin-30px">
                    <div className="phone">
                        <i class="bi bi-telephone-fill"></i>
                        <h4>Phone</h4>
                        <p><a href="tel:6006189840" class="nav-link p-0 text-body-secondary">
                            <h5>+91 6006189840</h5>
                        </a></p>
                    </div>
                    <div className="Email">
                        <i class="bi bi-envelope-fill"></i>
                        <h4>Email</h4>
                        <a href="mailto:bhatmuddu472@gmail.com" class="nav-link p-0 text-body-secondary"><h5>bhatmuddu472@gmail.com</h5></a>
                    </div>
                </div>
                <div className="address d-flex justfy-content-center align-items-center flex-column">
                    <i class="bi bi-geo-alt-fill"></i>
                    <h4>Address</h4>
                    <p>Maulana Azad National urdu University</p>
                </div>
            </div>
        </>
    )
}