import React from 'react'
import "./list.scss"

function List(props){
    return(
        <div className="list">{props.children}</div>
    )
}

export default List