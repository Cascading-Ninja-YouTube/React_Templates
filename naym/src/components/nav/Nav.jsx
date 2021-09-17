import React from 'react'
import './nav.css'
import {NavLink} from 'react-router-dom'
import NavLogo from '../../images/Logo.svg'
import {FaFacebook,FaTwitter} from 'react-icons/fa'
import {GrInstagram} from 'react-icons/gr'

function Nav() {

    function openNav()
    {
        document.getElementById('menu').classList.add('open');
        document.getElementById('hamburgerMenu').classList.add('shrink');
    }
    function closeNav()
    {
        document.getElementById('menu').classList.remove('open');
        document.getElementById('hamburgerMenu').classList.remove('shrink');
    } 
    function changeNav() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementById("navbar").classList.add('shrinkedNav');
        document.getElementById("hamburgerMenu").style.background="#000";
        document.querySelectorAll('.hamburgerMenu span').forEach(e => {
            e.style.background="#fff";
        });

    } else {
        document.getElementById("navbar").classList.remove('shrinkedNav');
        document.getElementById("hamburgerMenu").style.background="transparent";
        document.querySelectorAll('.hamburgerMenu span').forEach(e => {
            e.style.background="#000";
        });

    }
    }
    window.onscroll = function() {changeNav()};
  
   
    return (
        <section className="nav" id="navbar">
          <div className="brandLogo">
                <img src={NavLogo} alt="" className="navLogo"/>
          </div>
          <div className="hamburgerMenu" id="hamburgerMenu" onClick={openNav}>
              <span id="_1"></span>
              <span id="_2"></span>
              <span id="_3"></span>
          </div>

          <div className="menu" id="menu">
              <span id="brandName">найм</span>
              <span id="closeBtn" onClick={closeNav}>&times;</span>
            <a className="menuItem"   href="#landing"  onClick={closeNav} >Home</a>
            <a className="menuItem" href="#about" onClick={closeNav}>About</a>
            <a className="menuItem" href="#portfolio" onClick={closeNav} >Portfolio</a>
            <a className="menuItem" href="#testimonials" onClick={closeNav}>Testimonials</a>
            <a className="menuItem" href="#blogs" onClick={closeNav}>Blogs</a>
            <a className="menuItem" href="#contact" onClick={closeNav}>Contact</a>
            <div className="navSocials">
                <FaFacebook color='gray' size={21} />
                <GrInstagram color='gray' size={21} />
                <FaTwitter color='gray' size={21} />
            </div>
          </div>
        </section>
    )
}

export default Nav
