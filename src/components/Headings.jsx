import React from 'react'

const Headings = (props)=> {
    return(
        <div id={props.id} className="heading">
            <h3>{props.text}</h3>
        </div>
    )
}

export default Headings;