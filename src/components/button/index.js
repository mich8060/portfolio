import React from 'react'
import './button.scss'

function Button(props){
    return(
        <a href={props.href} className="button" target="_blank" rel="noopener noreferrer">{props.label}</a>
    )
}

export default Button