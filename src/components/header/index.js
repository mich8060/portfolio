import './header.scss'

import Nav from '../nav/'

function Header(){
    return(
        <header className="header light">
            <div className="header--mark">Michael Stevens</div>
            <Nav />
        </header>
    )
}

export default Header