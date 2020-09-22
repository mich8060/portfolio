import React from 'react'
import './project.scss'

import Button from '../button/' 

function Project(props){
    return(
        <section className={
            "project " +
            props.theme
        } style={{
            backgroundImage:'url('+props.image+')'
        }}>
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