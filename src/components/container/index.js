import React from "react"
import "./container.scss"

function Container(props){
    return(
        <section className={
            "container " + 
            (props.theme === 'dark' ? 'dark' : '')
        }>
            <div className="container--content">{props.children}</div>
        </section>
    )
}

export default Container