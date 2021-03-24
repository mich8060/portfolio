import React from 'react'
import './project.scss'

import Button from '../button/' 

function Project(props){
    return(
        <section className={
            "project " +
            props.theme
        } >
            <div className="project--image"style={{
                backgroundImage:'url('+props.image+')'
            }}>
                <img src={props.image} />
            </div>
            <div className="project--container">
                <div className="project--symbol">{props.symbol}</div>
                <div className="project--title">{props.title}</div>
                <div className="project--role">{props.role}</div>
                <div className="project--desc">{props.desc}</div>
                <Button label={props.action} href={props.href} />
            </div>
        </section>
    )
}

export default Project