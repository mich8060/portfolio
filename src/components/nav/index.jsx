import { Link } from 'react-router-dom';
import './nav.scss';

function Nav() {
    return (
        <nav className="nav">
            <ul>
                <li><Link to="/case-studies" title="Case studies page">Case Studies</Link></li>
                <li><Link to="/writing" title="My writing's page">Writing</Link></li>
                <li><Link to="/about" title="About me page">About</Link></li>
                <li><Link to="/playground" title="My playground page">Playground</Link></li>
                <li><Link to="/contact" title="Contact me">Contact</Link></li>
            </ul>
        </nav>
    );
}

export default Nav;