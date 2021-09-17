import React from 'react'
import './footer.css'
import {FaFacebook,FaTwitter,FaDeviantart} from 'react-icons/fa'
import {GrInstagram} from 'react-icons/gr'
import {AiOutlineDribbble,AiFillGithub} from 'react-icons/ai'
import {FirstName,LastName} from '../Name.json'
function Footer() {
    return (
        <section className="Footer paddingDiv">
            <div className="footerSocials">
            <FaFacebook color="#fff" className="FooterSocialIcon"/>
            <FaTwitter color="#fff" className="FooterSocialIcon"/>
            <AiOutlineDribbble color="#fff" className="FooterSocialIcon"/>
            <AiFillGithub color="#fff" className="FooterSocialIcon"/>
            <FaDeviantart color="#fff" className="FooterSocialIcon"/>
            </div>
            <div className="copyright">
                &copy;{FirstName} {LastName} 2021
            </div>
        </section>
    )
}

export default Footer
