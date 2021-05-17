import React from 'react'
import './nav.css';
import * as Icon2 from 'react-icons/fa'
import {NavLink} from 'react-router-dom'
import * as Icon from 'react-icons/fi'
import {CgMenuRight} from 'react-icons/cg'
function Nav() {
    function openNav()
    {
        // console.log('opening')

       document.getElementById('menu').classList.add('open');
       document.getElementById('hamMenu').style.display="none";
    }

    function closeNav()
    {
        // console.log('closing')
       document.getElementById('menu').classList.remove('open');
       document.getElementById('hamMenu').style.display="flex";
    }
    window.addEventListener('scroll',()=>{
        const navbar=document.getElementById('navbar');
        const hamMenu=document.querySelector('#hamMenu');
        
        if ((document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) ) {
            if(window.innerWidth>800){
            navbar.style.background="rgba(255, 255, 255, 0.964)";
            navbar.style.borderBottom="none";
            navbar.style.color="#000";
            navbar.style.minHeight="70px";
            navbar.style.boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px;"
          
            document.querySelectorAll('.navItem').forEach(element => {
                element.style.color="rgb(142 135 135)";

            });}
            hamMenu.style.background="#000";
          
          } else {
            if(window.innerWidth>800)
            {
            navbar.style.background="transparent";
            navbar.style.color="#fff";
            navbar.style.minHeight="100px";
          
            document.querySelectorAll('.navItem').forEach(element => {
                element.style.color="#fff";

            });}

            hamMenu.style.background="transparent";
          }
         
          
    })
           
          
         
       
       
      
    return (
       
        <div className="nav" id="navbar">
            <div id="hamMenu"onClick={openNav} >
            <CgMenuRight size={36}  id="hamIcon"/>
            </div>
            <div className="brandName">
          Ryori
           
            </div>
   
            <div className="menu " id="menu">
                <span id="closeBtn" onClick={closeNav}> &times;</span>
            <span><NavLink  to="/"exact className="navItem" activeClassName="active" onClick={closeNav}> Home </NavLink></span>
            <span><NavLink  to="/about" className="navItem" activeClassName="active" onClick={closeNav}> About </NavLink></span>
            <span><NavLink  to="/menu" className="navItem" activeClassName="active" onClick={closeNav}> Menu </NavLink></span>
            <span><NavLink  to="/gallery" className="navItem" activeClassName="active" onClick={closeNav}> Gallery </NavLink></span>
            <span><NavLink  to="/contact" className="navItem" activeClassName="active" onClick={closeNav}> Contact</NavLink></span>
            <div className="socialLinks">
                <a href="#" target="_blank" rel="noopener noreferrer"><Icon2.FaFacebook color="white" size={27}/></a>
                <a href="#" target="_blank" rel="noopener noreferrer"><Icon2.FaInstagram color="white" size={27}/></a>
                <a href="#" target="_blank" rel="noopener noreferrer"><Icon2.FaTwitter color="white" size={27}/></a>
                <a href="#" target="_blank" rel="noopener noreferrer"><Icon2.FaShopify color="white" size={27}/></a>
                <a href="#" target="_blank" rel="noopener noreferrer"><Icon2.FaTumblr color="white" size={27}/></a>
            </div>

            </div>
        </div>
        
    )
}

export default Nav
