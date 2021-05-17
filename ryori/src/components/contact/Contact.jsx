import React from 'react'
import './contact.css'
import Heading from '../Heading/Heading'
function Contact() {
    return (
      <>
        <div className="contactWrapper">
           
            <div className="contact-container row">
  <div className="left-col col-md-5">
    <img src="https://images.pexels.com/photos/402028/pexels-photo-402028.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"/>
  </div>

  
    
    <form id="contact-form" method="post" className="col-md-6">
    <Heading name="Contact Us"/>
      <label htmlFor="name">Full name</label>
  <input type="text" id="name" name="name" placeholder="Your Full Name" required/>
      <label htmlFor="email">Email Address</label>
  <input type="email" id="email" name="email" placeholder="Your Email Address" required/>
      <label htmlFor="message">Message</label>
  <textarea rows="6" placeholder="Your Message" id="message" name="message" required></textarea>
<button type="submit" id="submit" name="submit">Send</button>
</form>

  </div>
 
           
            </div>
          
            </>
            
    )
}

export default Contact
