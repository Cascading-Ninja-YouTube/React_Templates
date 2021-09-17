import React from 'react'
import Heading from '../headings/Heading'
import UserImage from '../../images/landingImage.png'
import './about.css'
import {FirstName,LastName,secondImage} from '../Name.json'
function About() {

    
    return (
        <section className="row AboutSection paddingDiv" id="about">
            <div className="col-md-6 aboutImage " >
                <img src={secondImage} alt="userImage" id="userImg" />
            </div>
            <div className="aboutDetails col-md-6">
            <Heading backText="About" frontText={FirstName}></Heading>
            <div className="aboutPara">
                <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero ea ipsum, esse numquam quibusdam facilis dicta cum delectus tempore necessitatibus tenetur ratione voluptatibus animi minus culpa vitae quae veritatis itaque iste consectetur, in quaerat, ut dolorum modi! Officiis,</p>
                <p> saepe harum odio voluptatem fugit impedit optio sit! Magnam asperiores maiores doloremque, praesentium voluptatum consectetur excepturi ullam quibusdam omnis magni similique possimus commodi ipsam officia nemo vero blanditiis natus, ratione sint cumque modi aliquam quasi provident esse. Delectus veniam incidunt, expedita maiores voluptate voluptatem labore ratione suscipit voluptates! Eum et non placeat voluptas a incidunt atque, nisi ratione praesentium excepturi fugit animi!
                </p>
            </div>
            <div className="aboutButton primaryButton">Learn More</div>
            </div>
            
        </section>
    )
}

export default About
