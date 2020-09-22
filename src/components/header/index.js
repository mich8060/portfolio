import React from 'react'
import { Link } from "react-router-dom";
import './header.scss'

import Nav from '../nav/'

function Header(){
    return(
        <header className="header light">
            <Link to="/">Michael Stevens</Link>
            <Nav />
        </header>
    )
}

export default Header