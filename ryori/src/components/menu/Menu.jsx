import React from 'react'
import {Link }from 'react-router-dom'
import './menu.css'
import Heading from '../Heading/Heading'
function Menu() {
    return (
        <section className="menuMain">
        <Heading name="Our Specialities" para="Browse through our collection of mouth watering recipes and the tradition of Japan." />
        <div className="menuWrapper row">
            <div className="menuSection col-md-4 col-lg-3">
                <div className="menuHeading">
                    Appetizers
                </div>
                <div className="menuList">
                    <div className="menuItem">
                        <div className="menuItemDetails">
                            <h5>Gyoza</h5>
                            <span>Japanese Pan-Fried Dumplings</span>
                        </div>
                        <div className="menuItemPrice">$14.49</div>
                    </div>

                    <div className="menuItem">
                        <div className="menuItemDetails">
                            <h5>Yakitori</h5>
                            <span>Chicken & Scallion Skewers (Negima) ねぎま
</span>
                        </div>
                        <div className="menuItemPrice">$7.99</div>
                    </div>

                    <div className="menuItem">
                        <div className="menuItemDetails">
                            <h5>Harumaki</h5>
                            <span>Spring Rolls </span>
                        </div>
                        <div className="menuItemPrice">$12.49</div>
                    </div>


                </div>
            </div>
      
            <div className="menuSection col-md-4 col-lg-3">
                <div className="menuHeading">
                    Sushi
                </div>
                <div className="menuList">
                    <div className="menuItem">
                        <div className="menuItemDetails">
                            <h5>Makizushi</h5>
                            <span>Rice and ingredients rolled in a sheet of nori seaweed</span>
                        </div>
                        <div className="menuItemPrice">$14.49</div>
                    </div>

                    <div className="menuItem">
                        <div className="menuItemDetails">
                            <h5>Narezushi</h5>
                            <span>Fish preserved for several months to several years in salt and rice</span>
                        </div>
                        <div className="menuItemPrice">$12.49</div>
                    </div>

                    <div className="menuItem">
                        <div className="menuItemDetails">
                            <h5>Chirashizushi</h5>
                            <span>Bowl of rice topped with a variety of ingredients</span>
                        </div>
                        <div className="menuItemPrice">$19.99</div>
                    </div>


                </div>
            </div>
      
            <div className="menuSection col-md-4 col-lg-3">
                <div className="menuHeading">
                  Ramen
                </div>
                <div className="menuList">
                    <div className="menuItem">
                        <div className="menuItemDetails">
                            <h5>Miso Ramen</h5>
                            <span>Fragrant soybean paste sauteed together with ginger,garlic and pork broth</span>
                        </div>
                        <div className="menuItemPrice">$12.49</div>
                    </div>

                

                    <div className="menuItem">
                        <div className="menuItemDetails">
                            <h5>Kitakata Ramen</h5>
                            <span>served in a shoyu with chashu pork, bamboo shoots, naruto- a fish cake </span>
                        </div>
                        <div className="menuItemPrice">$20.49</div>
                    </div>


                </div>
            </div>
      
      
        </div>   
       
        <Link to="/menu" className="menuBtn">View Complete Menu</Link>
        
        </section>
    )
}

export default Menu
