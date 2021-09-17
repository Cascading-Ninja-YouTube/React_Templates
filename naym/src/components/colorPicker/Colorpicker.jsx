import './colorpicker.css'
import { useState } from 'react'
import ColorList from './Colors.json'
import {BsSun,BsGearFill} from 'react-icons/bs'
import {RiMoonClearFill} from 'react-icons/ri'
import Sun from '../../images/sun.svg'
import Moon from '../../images/moon.svg'
import profile from '../Name.json'
function Colorpicker() {
const [rootcolor,setrootColor]=useState(`#AB2330`);
const [dark,setDark]=useState(false);
const [open,setOpen]=useState(false);
var r = document.querySelector(':root');
const DarkMode= document.getElementById('DarkMode');
// r.style.setProperty('--blue', `${rootcolor}`);
// document.getElementById('colorPickerButton').addEventListener('click',()=>
// {
//     if(open)
//     {
//         document.getElementById('colorPickerButton').style.right="-190px";
//         setOpen(false)
//     }
//     else
//     {
//         document.getElementById('colorPickerButton').style.right="0px";
//         setOpen(true)
//     }
// })
function changeDark()
{
    if(dark)
    {
        console.log('dark')
        document.querySelector(':root').style.setProperty('--lightText','#fff' )
        document.querySelector(':root').style.setProperty('--darkText','#111' )
        document.querySelector(':root').style.setProperty('--gray','rgb(51, 50, 50)' )
        document.querySelector(':root').style.setProperty('--boxShadow','rgb(255, 255,255,0.1)' )
        // DarkMode.innerHTML="<RiMoonClearFill color='#fff' size={21}/>";
      document.querySelector('#DarkMode img').src=Moon;
    }
    else
    {
        console.log('not dark')
        document.querySelector(':root').style.setProperty('--lightText','#111' )
        document.querySelector(':root').style.setProperty('--darkText','#fff' )
        document.querySelector(':root').style.setProperty('--gray','#f0efef' )
        document.querySelector(':root').style.setProperty('--boxShadow','rgb(0, 0, 0,0.1)' )
        // DarkMode.innerHTML="<BsSun color='#fff' size={21}/>";
      document.querySelector('#DarkMode img').src=Sun;
        
    }
    setDark(!dark)
}
function openPicker()
{
    if(open)
    {
        
       document.querySelector('.settingsIcon').style.right=getComputedStyle(document.querySelector(':root')).getPropertyValue('--pickerWidth');
       document.querySelector('#colorPickerButton').style.right="0";
    }
    else
    {
    
        document.querySelector('.settingsIcon').style.right="0";
       document.querySelector('#colorPickerButton').style.right="-200px";
    }
    setOpen(!open)
}

    console.log(profile.profileImage)
document.querySelector(':root').style.setProperty('--background',`url(${profile.profileImage}) rgba(255, 255, 255, 0.503)`)

    return (
        <section id="colorWrapper">
        <div className="settingsIcon" onClick={()=>openPicker()}><BsGearFill size={25} color="#fff" id="gearIcon"/></div>
        <section className="colorPickerSection" id="colorPickerButton">
            <span id="colorPickerText">Colors</span>
            <div className="colors">
            {ColorList.map(color=>(
                
                <div className="colorDiv" key={color.id} style={{background:`${color.color}`,cursor:"pointer"}} onClick={()=>{document.querySelector(':root').style.setProperty('--primary', `${color.color}`);}}></div>                
            ))}
            </div>
        </section>
        
        <div onClick={()=>{changeDark()}} id="DarkMode">
            <img src={Sun} alt="" />           
        </div>
        </section>
    )
}

export default Colorpicker
