import React from 'react'
import './intro.scss'

import Container from '../container/'
import Display from '../display/'
import Heading from '../heading/'
import Subtitle from '../subtitle/'

function Intro(){
    return(
        <Container theme="dark">
            <Subtitle>Intro</Subtitle>
            <Display>Principal Product Designer &amp; Freelancer &ndash; <span>Salt Lake City, Utah.</span></Display>
            <Heading>
                See bits and pieces of my design work on <a href="http://www.dribbble.com/mich8060" title="Dribbble" target="_blank" rel="noopener noreferrer">Dribbble</a>,
                and a full resume on <a href="https://www.linkedin.com/in/michael-stevens-a010a66" title="Linkedin" target="_blank" rel="noopener noreferrer">Linkedin</a>.
            </Heading>
        </Container>
    )
}

export default Intro