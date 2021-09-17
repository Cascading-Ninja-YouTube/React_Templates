import React from 'react'
import './landing.css'
import userImage from '../../images/landingImage.png'
import {FiFacebook,FiInstagram,FiTwitter,FiGithub} from 'react-icons/fi'
import {FirstName,LastName,profile,profileImage} from '../Name.json'
function Landing() {

    console.log(profileImage)
   
    return (
        <>
        <section className="LandingSection" id="landing">
            <div className="profileDetails">
            <section className="WritingDiv">

                <h5>Hi, I am</h5>
            <div className="profileName">
                <span>{FirstName}</span>
                {LastName}
                <h5>{profile}</h5>
            </div>
            <a href="#contact" className="landingButton primaryButton">
                Hire Me
            </a>
            </section>
        </div>
            <div className="profileImage" >
            
            </div>
            <section id="landingSocials">
            <span><FiGithub className="landingSocialIcon" size={21}/></span>
            <span><FiFacebook className="landingSocialIcon" size={21}/></span>
            <span><FiInstagram className="landingSocialIcon" size={21}/></span>
            <span><FiTwitter className="landingSocialIcon" size={21}/></span>
        </section>
        </section>
       
       
        </>
    )
}

export default Landing
