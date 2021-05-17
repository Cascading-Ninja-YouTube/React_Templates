import React from 'react'
import './heading.css'
function Heading(props) {
    return (
        <div className="HeadingWrapper">
            <h3 className="heading">{props.name}</h3>
            <p className="headingPara">{props.para} </p>
        </div>
    )
}

export default Heading
