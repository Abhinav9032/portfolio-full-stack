import React from 'react'

const Headings = (props)=> {
    return(
        <div id={props.id} className="heading">
            <h2>{props.text}</h2>
        </div>
    )
}

export default Headings;