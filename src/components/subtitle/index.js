import React from 'react'
import "./subtitle.scss"

function Subtitle(props){
    return(
        <div className="subtitle">
            <span>
                {props.children}
            </span>
        </div>
    )
}

export default Subtitle