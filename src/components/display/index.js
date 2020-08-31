import React from 'react'
import "./display.scss"

function Display(props){
    return(
        <div className="display">
            {props.children}
        </div>
    )
}

export default Display