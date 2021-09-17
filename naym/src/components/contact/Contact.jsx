import React from 'react'
import './contact.css'
import Heading from '../headings/Heading'
function Contact() {
    return (
        <section  className="ContactSection paddingDiv" id="contact">
            <Heading backText="Contact" frontText="Get in touch"/>
      
               <div className="FormWrapper">
     
             <div className="container">
               <div className="row align-items-stretch no-gutters contact-wrap">
               <div className="col-lg-4 rightDiv">
                   <div className="contact-info h-100">
                     <h3>Have a question?</h3>
                     <p className="mb-5">If you have any questions regarding our work, or are willing to hire us for your institute, feel free to query us for the same. We usually respond in a day. Happy browsing.</p>
                     <h3>Contact Information</h3>
                     <p className="mb-5">If you're having any difficulties with the form or are comfortable with a in-person conversation, feel free to contact us on our cell number or our email</p>
                     <ul className="list-unstyled">
                       <li className="d-flex">
                         <span className="fa fa-phone mr-3 mt-1"></span>
                         <span className="text">+91 (9xx) xxx xxx</span>
                       </li>
                       <li className="d-flex">
                         <span className="fa fa-envelope mr-3"></span>
                         <span className="text">info@williamburkins.com</span>
                       </li>
                     </ul>
                   </div>
                 </div>
               
               
                 <div className="col-lg-8 leftDiv">
                   <div className="form h-100">
                  
                     <form className="mb-5 gform" action="#" method="POST" id="contactForm" name="contactForm">
                       <div className="row">
                         <fieldset className="col-md-6 form-group mb-5">
                           <legend className="col-form-label">Name *</legend>
                           <input type="text" className="form-control" name="name" id="name" placeholder="Your name" required/>
                         </fieldset>
                         <div className="col-md-6 form-group mb-5">
                           <label htmlFor="" className="col-form-label">Email *</label>
                           <input type="text" className="form-control" name="email" id="email"  placeholder="Your email" required/>
                         </div>
                       </div>
         
                       <div className="row">
                         <div className="col-md-6 form-group mb-5">
                           <label htmlFor="" className="col-form-label">Phone</label>
                           <input type="text" className="form-control" name="phone" id="phone"  placeholder="Phone #"/>
                         </div>
                         <div className="col-md-6 form-group mb-5">
                           <label htmlFor="" className="col-form-label">Institute</label>
                           <input type="text" className="form-control" name="institute" id="institute"  placeholder="Institute  name"/>
                         </div>
                       </div>
         
                       <div className="row">
                         <div className="col-md-12 form-group mb-5">
                           <label htmlFor="message" className="col-form-label">Message *</label>
                           <textarea className="form-control" name="message" id="message" cols="30" rows="4"  placeholder="Write your message" required></textarea>
                         </div>
                       </div>
                       <div className="row">
                         <div className="col-md-12 form-group">
                           <button type="submit" className="primaryButton">Send Message</button>
                           <span className="submitting"></span>
                         </div>
                       </div>
                       <div id="form-message-warning mt-4"></div> 
                     <div className="thankyou_message">
                       <p id="demo"></p>
                     </div>
                     </form>
         
                     
         
                   </div>
                 </div>
                 
               </div>
             </div>
         
           </div>
           </section>
 
    )
}

export default Contact
