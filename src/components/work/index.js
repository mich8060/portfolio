import React from "react"
import "./work.scss"

import Container from '../container/'
import Display from '../display/'
import Heading from '../heading/'
import Subtitle from '../subtitle/'

function Work(){
    return(
        <Container theme="dark">
            <Subtitle>Work</Subtitle>
            <Display>I have designed for brands such as Pluralsight, Backcountry, Skullcandy, Competitive Cyclist &amp; <span>Jason's Deli</span>.</Display>
            <Heading>
                In the past twenty years I have made great efforts to continually develop,
                grow and achieve success in all aspects of both design & business knowledge.
            </Heading>
        </Container>
    )
}

export default Work