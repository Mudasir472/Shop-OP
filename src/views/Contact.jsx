import { Link } from 'react-router-dom';
import "./Contact.css"
import ContactLeftBody from './ContactLeftBody';
import ContactRightBody from './ContactRightBody';
import PageHeading from './PageHeading';

export default function () {
    return (
        <>
        <div className=" margin-30px">
                    
                    <PageHeading heading="Contact"/>
                    {/* <div className="Header d-flex align-items-center justify-content-center py-4">
                        <h3>Contact</h3>
                    </div> */}
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