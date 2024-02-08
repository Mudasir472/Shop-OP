
import "./Contact.css"
export default function () {
    return (
        <>
            <div className="contactLeft d-flex flex-column">
                <div className="heading">
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
                    <div className="map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.6878458656315!2d78.3613479!3d17.426761799999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93f5ada6d80f%3A0x6d6400aee08b61a1!2sMaulana%20Azad%20National%20Urdu%20University!5e0!3m2!1sen!2sin!4v1707402679422!5m2!1sen!2sin"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>
        </>
    )
}