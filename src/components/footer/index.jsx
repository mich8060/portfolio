import './footer.scss';

import Icons from '../icons/'

function Footer(){
    return(
        <footer className="footer">
            <div className="footer--container">
                <div className="footer--headline">Curious to explore further? Reach out below.</div>
                <ul className="footer--social">
                    <li><a href="https://dribbble.com/mich8060" title="LinkedIn" target="_blank" rel="noreferrer"><Icons name="linkedin" size="sm" /></a></li>
                    <li><a href="https://www.linkedin.com/in/michael-stevens-a010a66/" title="Instagram" target="_blank" rel="noreferrer"><Icons name="instagram" size="sm" /></a></li>
                    <li><a href="https://www.facebook.com/michael.stevens.5454021/" title="Facebook" target="_blank" rel="noreferrer"><Icons name="facebook" size="sm" /></a></li>
                    <li><a href="https://twitter.com/mich8060" title="X" target="_blank" rel="noreferrer"><Icons name="x" size="sm" /></a></li>
                </ul>
                <div className="footer--contact"><a href="mailto:mich8060@gmail.com" target="_blank" rel="noreferrer">mich8060@gmail.com</a></div>
            </div>
        </footer>
    )
}

export default Footer;