import {useState,useEffect} from 'react'
import './works.css'
import Heading from '../headings/Heading'
import WorkList from './Works.json'

function Works() {
    const [Filter,setFilter] = useState('all');
  
 
//    window.onload= ()=>{
     
//         let all = document.getElementById("all");
//         let ui =document.getElementById("ui");
//         let web =document.getElementById("web");
//         let app =document.getElementById("app");
//         let theme =document.getElementById("themes");
     
//         console.log(all,ui,web,app,theme)
//    if(all)
//          {
//          all.onclick= ()=> {setFilter('all'); console.log(Filter)}
//           ui.onclick= ()=> {setFilter('ui'); console.log(Filter)}
//           web.onclick= ()=> {setFilter('web'); console.log(Filter)}
//           app.onclick= ()=> {setFilter('app'); console.log(Filter)}
//           theme.onclick= ()=> {setFilter('theme'); console.log(Filter)}
//          }
   
  
//     }
   
    return (
        <section className="workSection paddingDiv" id="portfolio">
            <div className="headingWrapper">
            <Heading backText="Portfolio" frontText="My works"/>
            <div className="categoryWrapper">
                <span id="all" onClick={()=>{setFilter('all'); console.log(Filter)}}>All</span>
                <span id="ui" onClick={()=>{setFilter('ui'); console.log(Filter)}}>UI</span>
                <span id="web"onClick={()=>setFilter('web')}>Web</span>
                <span id="app"onClick={()=>setFilter('app')}>App</span>
                <span id="themes"onClick={()=>setFilter('themes')}>Themes</span>
            </div>
            </div>

            <div className="row ProductWrapper">
              
                {(WorkList.length)>0?<>
                    {WorkList
                    .filter(workDiv=>((workDiv.tag).toLowerCase()===`${Filter.toLowerCase()}`|| `${Filter}`==='all'))
                    .map(product=>(
                        <div className="productDiv col-lg-4 col-md-6  col-xs-12" key={product.id} >
                        <div className="productImage">
                       <img src={product.productImage} alt={product.productName} />
                       </div>
                       <div className="productName">{product.productName}</div>
                       <div className="productType italicText">{product.productType}</div>
                    </div>

                    ))}

                </>:<><div>No works yet</div></>                }
          
            
            </div>
        
        </section>
    )
}

export default Works
