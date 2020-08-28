import React from 'react'
import './header.scss'

import Nav from '../nav/'

function Header(){
    return(
        <header className="header light">
            <a href="https://www.michael-stevens.me">Michael Stevens</a>
            <Nav />
        </header>
    )
}

export default Header