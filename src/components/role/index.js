import React from "react"
import "./role.scss"

function Role(props){
    return(
        <div className="role">
            <div className="role--title">{props.title}</div>
            <div className="role--timeline">{props.timeline}</div>
        </div>
    )
}

export default Role