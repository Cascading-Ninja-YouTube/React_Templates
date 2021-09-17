import { useEffect } from 'react';
import './App.css';
import AOS from "aos";
import "aos/dist/aos.css";

import Home from './Home';
import Nav from './components/nav/Nav'
import Colorpicker from './components/colorPicker/Colorpicker';
import Footer from './components/footer/Footer';

import Missing from './components/missing/Missing';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
function App() {
  window.scrollTo(0,0);
  
window.onload = function()
 {
  var cursor = document.querySelector(".cursor");
    var cursor2 = document.querySelector(".cursor2");
    document.addEventListener("mousemove",function(e){
      cursor.style.cssText = cursor2.style.cssText = "left: " + e.clientX + "px; top: " + e.clientY + "px;";
    });
 }

  return (
    <>
    
    {/* <div className="preloader">
      <div className="circle"></div>
      <div className="circle circle1"></div>
    </div> */}
    <div className="cursor"></div>
  <div className="cursor2"></div>
      <Router>
        
        <Switch>
            <Route path="/" exact component={Home}></Route>
            <Route path="*"  component={Missing}></Route>
        </Switch>
       <Colorpicker/> 
        <Footer/>
        </Router>
    </>
  );
}

export default App;
