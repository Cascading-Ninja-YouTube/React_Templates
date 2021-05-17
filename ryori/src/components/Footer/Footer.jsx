import React from 'react'
import './footer.css'
import * as Icon from 'react-icons/fa'
function Footer() {
    return (
        <section className="footer">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2470.142765177574!2d-73.79763170665!3d40.72712015294175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c260557ed8c619%3A0x43fc65084041fc3b!2s172-2%2073rd%20Ave%2C%20Fresh%20Meadows%2C%20NY%2011366%2C%20USA!5e0!3m2!1sen!2sin!4v1619880252962!5m2!1sen!2sin"className="mapFrame"  loading="lazy"></iframe>
           <div className="footerSocials">
               <div className="socialIcon">
               <a href="#">    <Icon.FaFacebookF size={36} color="white" className="icon"/></a>
               </div>
               <div className="socialIcon">
               <a href="#">   <Icon.FaInstagram size={36} color="white"className="icon"/></a>
               </div>
               <div className="socialIcon">
               <a href="#">  <Icon.FaTwitter size={36} color="white"className="icon"/></a>
               </div>
               <div className="socialIcon">
               <a href="#">    <Icon.FaShopify size={36} color="white"className="icon"/></a>
               </div>
            </div> 
            <div className="copyright">©Ryori 2021</div>
        </section>
    )
}

export default Footer
