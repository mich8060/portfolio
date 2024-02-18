import { Link } from 'react-router-dom';

import Branding from '../branding';

import './header.scss';

function Header() {
    return (
        <header className="header">
            <Link to="/" title="Home page"><Branding /></Link>
        </header>
    );
}

export default Header;