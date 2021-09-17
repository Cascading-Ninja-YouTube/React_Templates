import React from 'react'
import {Link} from 'react-router-dom'
import './missing.css';
import Video from '../../images/lost.mp4'
import Heading from '../headings/Heading';
function Missing() {
    return (
        <section className="MissingSection paddingDiv">
            <Heading backText="Error 404" frontText="Page Missing"/>
            <div className="videoDiv">
            {/* <video  controls  id="missingVideo" autoPlay={true}>
            <source src={Video} type="video/mp4"/>
            Your browser does not support HTML5 video.
            </video> */}
<img src="https://media.giphy.com/media/VNFkoQFMGNuw74MALr/giphy.gif?cid=ecf05e47ymoje35unxzgzl4p1b2rn1utvc3ejrgs4ezf94u6&rid=giphy.gif&ct=g" className="missingImage img-fluid"alt="" />
            <Link to="/" className="primaryButton" style={{textDecoration:"none",marginTop:"50px"}}> Return to Home Page</Link>
            </div>
        </section>
    )
}

export default Missing
