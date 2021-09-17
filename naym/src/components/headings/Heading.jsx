import React from 'react'
import './heading.css'
function Heading(props) {
    return (
        <section className="headingSection">
          <div id="Headings">
              <span id="BackText">{props.backText}</span>
              <span id="FrontText">{props.frontText}</span>
          </div>
        </section>
    )
}

export default Heading
