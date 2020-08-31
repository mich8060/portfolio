import React from 'react'
import './heading.scss'

function Heading(props){
    return(
        <div className={
            "heading " +
            (props.theme === 'dark' ? 'dark' : '')
        }>
            {props.children}
        </div>
    )
}

export default Heading