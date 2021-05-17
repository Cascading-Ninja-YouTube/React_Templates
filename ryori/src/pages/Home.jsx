import React from 'react'
import Landing from '../components/landing/Landing'
import About from '../components/about/About'
import Parallax from '../components/parallax/Parallax'
import Menu from '../components/menu/Menu'
import Testimonial from '../components/testimonials/Testimonial'
import Contact from'../components/contact/Contact';
function Home() {
    window.scrollTo(0,0);
    return (
        <div>
            <Landing/>
            <About/>
            <Parallax/>
            <Menu/>
            <Testimonial/>
            <Contact/>
        </div>
    )
}

export default Home
