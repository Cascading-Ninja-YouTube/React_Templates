import React from 'react'
import Landing from './components/landing/Landing'
import About from './components/about/About'
import Service from './components/Service/Service'
import Works from './components/works/Works.jsx'
import Testimonials from './components/testimonials/Testimonials'
import Blog from './components/blogs/Blog'
import Contact from './components/contact/Contact'
import ReachOut from './components/reachOut/ReachOut'
import Nav from './components/nav/Nav'
function Home() {
    
    return (
        <>
        <Nav/>
        <Landing/>
        <About/>
        <Service/>
        <Works/>
        <Testimonials/>
        <Blog/>
        <Contact/>
        <ReachOut/>
        </>
    )
}


export default Home
