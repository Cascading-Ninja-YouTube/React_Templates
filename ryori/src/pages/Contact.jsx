import React from 'react'
import ContactComponent from '../components/contact/Contact'
import Heading from '../components/Heading/Heading'
import '../components/contact/contact.css'
function Contact() {
    window.scrollTo(0,0)
    return (
        <div>
                <div className="alteranteLanding contactLanding">
         <h3> Get in touch</h3>
        </div>
            <ContactComponent/>
            <Heading name="Contact details"/>
            <div className="contactphone contactDetail">890X-XXXXXX</div>
            <div className="contactemail contactDetail">info@ryori.com</div>
        </div>
    )
}

export default Contact
