import React,{useState} from 'react'
import './testimonials.css'
import Heading from '../headings/Heading'
import TestimonialList from './TestimonialList.json'
import QuoteIcon from '../../images/quote.svg'
import {FaQuoteLeft} from 'react-icons/fa'
function Testimonials() {
    const [current,setCurrent]=useState(1);
    

   
    return (
        <section className="TestimonialsWrapper paddingDiv" id="testimonials">
            <div className="headingWrapper">
                <Heading backText="Testimonials" frontText=" What Clients Say about us" />
            </div>

            <div className="testimonialProfileWrapper">
            {TestimonialList.length>0?<> 
           { TestimonialList.map(element=>
            (
                 <div className="testimonialProfileDiv" 
                 onMouseEnter={()=>setCurrent(element.id)} 
                 onClick={()=>setCurrent(element.id)}
                 key={element.id}
                 >
                    <img src={element.image} alt="" />
                 </div>
            ))}
            
            </>:<>You have not received any testimonial yet </>}
            </div>

            <div className="testimonialContentDiv">
                {TestimonialList.length>0 ?
                <>
                
               {TestimonialList
               .filter(element=>element.id===current)
               .map(testimonial=>
                (
                   <>
                    <div className="row testimonialContent" key={testimonial.id}>
                        <div className="testimonialColumnDiv col-md-6 col-xs-10" >
                            <div className="quoteIcon">
                            <FaQuoteLeft size={42}/>
                            </div>
                            <div className="Quote italicText">
                                {testimonial.quote}
                            </div>
                            <div className="DesignationDiv">
                                <span id="name">{testimonial.name}</span> <span id="designation">{testimonial.designation}</span>
                            </div>
                            
                        </div>
                        <div className="testimonialImage col-md-6 col-xs-10">
                                <img src={testimonial.image} alt="" />
                            </div>
                    </div>
                    </>
           
                ))
               
               } 
                
                </>
                :
                <>You have not received any testimonial yet</>}
            </div>
        </section>
    )
}

export default Testimonials
