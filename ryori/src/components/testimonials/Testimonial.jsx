import React from 'react'
import './testimonial.css'
function Testimonials() {
    return (
        <div className="TestimonialWrapper">
               <section className="testimonial text-center">
        <div className="container">

            <div className="heading white-heading">
                Testimonials
            </div>
            <div id="testimonial4" className="carousel slide testimonial4_indicators testimonial4_control_button thumb_scroll_x swipe_x" data-ride="carousel" data-pause="hover" data-interval="5000" data-duration="2000">
             
                <div className="carousel-inner" role="listbox">
                    <div className="carousel-item active">
                        <div className="testimonial4_slide">
                           
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur nisi laboriosam provident laudantium temporibus facilis reprehenderit in voluptas repellendus ad. </p>
                            <h4>Client 1</h4>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="testimonial4_slide">
                           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur nisi laboriosam provident laudantium temporibus facilis reprehenderit in voluptas repellendus ad. </p>
                            <h4>Client 2</h4>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="testimonial4_slide">
                           
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur nisi laboriosam provident laudantium temporibus facilis reprehenderit in voluptas repellendus ad. </p>
                            <h4>Client 3</h4>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="testimonial4_slide">
                           
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur nisi laboriosam provident laudantium temporibus facilis reprehenderit in voluptas repellendus ad. </p>
                            <h4>Client 4</h4>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="testimonial4_slide">
                           
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur nisi laboriosam provident laudantium temporibus facilis reprehenderit in voluptas repellendus ad. </p>
                            <h4>Client 5</h4>
                        </div>
                    </div>
                    
                </div>
                <a className="carousel-control-prev" href="#testimonial4" data-slide="prev">
                    <span className="carousel-control-prev-icon"></span>
                </a>
                <a className="carousel-control-next" href="#testimonial4" data-slide="next">
                    <span className="carousel-control-next-icon"></span>
                </a>
            </div>
        </div>
    </section>

            
        </div>
    )
}

export default Testimonials
