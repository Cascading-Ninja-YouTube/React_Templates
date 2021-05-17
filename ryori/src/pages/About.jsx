import React from 'react'
import About from '../components/about/About'
import '../components/about/about.css'
function AboutPage() {
    window.scrollTo(0,0);
    return (
        <>
        <div className="alteranteLanding aboutLanding">
        <h3> ABOUT US</h3>
        </div>
         <About/>   
        </>
    )
}

export default AboutPage
