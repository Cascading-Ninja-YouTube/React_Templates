import React from 'react'
import './Missing.css';
import {Link} from 'react-router-dom'
function Missing() {
  window.scrollTo(0,0);
    return (
     <>
    <div class="missing">
    <span className="_404">404</span>
    	<h1>Not found <span>:(</span></h1>
			<p>Sorry, but the page you were trying to view does not exist.</p>

			
		</div>
     </>
    )
}

export default Missing
