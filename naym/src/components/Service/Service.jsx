import React from 'react'
import './services.css'
import ReactIcon from '../../images/reactIcon.svg'
import NodeIcon from '../../images/node.svg'
import ServerIcon from '../../images/server.svg'
import Heading from '../headings/Heading'
function Service() {
    
    return (
        <section className="ServiceSection " id="services">
          
         <div className="serviceCardWrapper row">
             <div className="serviceCard col-lg-3 col-md-5  react" id="reactCard" >
                 <img src={ReactIcon} alt="" />
                 <div className="serviceCardTitle">React Js</div>
                 <div className="serviceCardDetail">
                     <p className="italicText">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam fugit delectus sequi dolores ex, repellat vero aspernatur maiores. Incidunt, eos.</p></div>
                 <div className="primaryButton serviceButton">Read More</div>
             </div>
             <div className="serviceCard col-lg-3 col-md-5  node" id="nodeCard" >
                <img src={NodeIcon} alt="" />
                <div className="serviceCardTitle">Node Js</div>
                 <div className="serviceCardDetail"><p className="italicText">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam fugit delectus sequi dolores ex, repellat vero aspernatur maiores. Incidunt, eos.</p></div>
                 <div className="primaryButton serviceButton">Read More</div>
             </div>
             <div className="serviceCard col-lg-3 col-md-5  server" id="serverCard" >
                 <img src={ServerIcon} alt="" />
                 <div className="serviceCardTitle">Server Management</div>
                 <div className="serviceCardDetail"><p className="italicText">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam fugit delectus sequi dolores ex, repellat vero aspernatur maiores. Incidunt, eos.</p></div>
                 <div className="primaryButton serviceButton">Read More</div>
             </div>
         </div>
        </section>
    )
}

export default Service
