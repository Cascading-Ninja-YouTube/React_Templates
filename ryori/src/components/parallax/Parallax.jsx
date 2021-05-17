import React from 'react'
import './parallax.css'
import Fan from '../../images/fan2.png'
function Parallax() {
    return (
        <div className="parallaxDiv">
            <div className="parallaxHeading">
                <img src={Fan} alt=""/>
                <h2>Opening Hours</h2>
                <img src={Fan} alt=""/>
            </div>
            <span className="parallaxHeading parallaxspan">Call to reserve a table</span>
            <div className="parallaxHours">
                <div className="openinghour col-md-4">
                    <div className="openingDay">
                        Sunday <br/> to <br/> Wednesday
                    </div>
                    <div className="openingTime">
                        09:00 <br/>23:00
                    </div>
                </div>
                <div className="openinghour col-md-4">
                    <div className="openingDay">
                        Friday <br/> and <br/> Saturday
                    </div>
                    <div className="openingTime">
                        14:00 <br/>00:00
                    </div>
                </div>
            
            </div>
            <span className="parallaxHeading parallaxspan" style={{color:"white"}}>Reservation Number: 890x-xxxxxx</span>
        </div>
    )
}

export default Parallax
