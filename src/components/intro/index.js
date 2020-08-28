import React from 'react'
import './intro.scss'

function Intro(){
    return(
        <section class="intro theme--dark">
            <div class="intro--container">
                <div className="intro--title">Intro</div>
                <div className="intro--display">Product Designer &amp; Freelancer <br />Salt Lake City, Utah.</div>
                <div className="intro--heading">
                    See bits and pieces of my design work on <a href="http://www.dribbble.com/mich8060" target="_blank">Dribbble</a>,
                    and a full resume on <a href="https://www.linkedin.com/in/michael-stevens-a010a66" target="_blank">Linkedin</a>.
                </div>
            </div>
        </section>
    )
}

export default Intro