import { Link } from 'react-router-dom';
import "./Contact.css"
import ContactLeftBody from './ContactLeftBody';
import ContactRightBody from './ContactRightBody';

export default function () {
    return (
        <>
        <div className="head margin-30px">
                    <div className="heading">
                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li style={{ textDecoration: "none" }} class="breadcrumb-item"><Link style={{ color: "black" }} to="/">Home</Link></li>
                                <li class="breadcrumb-item active" aria-current="page">Contact</li>
                            </ol>
                        </nav>
                    </div>
                    <div className="Header d-flex align-items-center justify-content-center py-4">
                        <h3>Contact</h3>
                    </div>
                </div>
            <div className="container">
                

                <div className="contactMain">
                    <ContactLeftBody />
                    <ContactRightBody/>
                </div>
            </div>
        </>
    )
}