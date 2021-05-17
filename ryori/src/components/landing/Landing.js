import {React,useState} from 'react'
import './landing.css'
import Logo from '../../images/logoDark2.png'
import Line from '../../images/line.svg';
import * as Icon from 'react-icons/fi'
import * as Icon2 from 'react-icons/bi'
function Landing() {
    return (
      
        <div className="landing">
            <div className="headingImg">
                <img src={Logo} alt="logo"/>

            </div>
            <div className="headingText">
            Taste Japan at  Ryori
            {/* <span style={{fontFamily:'"Kashima",sans-serif',fontWeight:"normal"}}> Ryori</span> */}
            
            </div>
            {/* <div className="headinglineimg">
                <img src={Line} alt=""/>
            </div> */}
            <div className="headingPara">
            Experience Authentic Japanese Cusinie with us.
            </div>
            {/* <div className="headingBtn">
                Reserve a Seat
            </div> */}
            <div className="mouseIcon">
                <Icon2.BiMouse size={24}/>
            </div>
        </div>
        
    )
}

export default Landing
