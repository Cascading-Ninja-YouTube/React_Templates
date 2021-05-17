import React from 'react'
import './about.css'
import Heading from '../Heading/Heading'
import Food from '../../images/food.png'
function About() {
    return (
        <>
        <section className="aboutSection div_big">
            <div className="headingDiv">
            <Heading name="About Us" para="We love eating as much as you do. Hence We has been serving our customers satisfactorily since 1998. Welcome to Ryori."/>            
            </div>

            <div className="aboutDiv">
                <div className="row aboutrow">
                    <div className="aboutPara col-md-5">
                        <div className="aboutHeading">The Origin</div>
                        <p>Ryori Group was founded in  <span className="redText">1998</span> and has been serving its customers satisfactorily ever since. Come, get a table at Ryori and enjoy the various cuisines we serve in our restaurants.</p>
                        <p>Ryori Group was founded in  <span className="redText">1998</span> and has been serving its customers satisfactorily ever since. Come, get a table at Ryori and enjoy the various cuisines we serve in our restaurants.</p>
                    </div>
                    <div className="aboutImg col-md-4">
                        <img src={Food} alt="pic of japanese cuisine"/>
                    </div>
                </div>
                <div className="row aboutrow">
                    <div className="aboutPara col-md-5">
                    <p>Ryori Group was founded in  <span className="redText">1998</span> and has been serving its customers satisfactorily ever since. Come, get a table at Ryori and enjoy the various cuisines we serve in our restaurants.</p>
                        <p>Ryori Group was founded in  <span className="redText">1998</span> and has been serving its customers satisfactorily ever since. Come, get a table at Ryori and enjoy the various cuisines we serve in our restaurants.</p>
                    </div>
                    <div className="aboutImg col-md-5">
                    <img src="https://images.pexels.com/photos/590478/pexels-photo-590478.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt=""/>
                    </div>
                </div>
            </div>

        </section>   
        </>
    )
}

export default About
